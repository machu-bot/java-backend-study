/**
 * 가벼운 Markdown-to-HTML 변환기 (의존성 0).
 * - 펜스 코드 블록 (```lang ... ```) → <pre class="q-code"><code class="lang-xxx">…</code></pre>
 * - 인라인 코드 (`…`) → <code>…</code>
 * - 그 외 텍스트는 그대로 두되 HTML 이스케이프
 *
 * 백엔드 스터디 사이트의 문제 prompt 전용 — 일반 Markdown 전체를 지원하진 않음.
 */

const escape = (s: string): string =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

/** 인라인 변환: `code` 만 <code> 로 감싼다. */
const inline = (s: string): string => {
  // escape 먼저, 그 다음 inline code 처리
  let out = escape(s);
  // `…` — backtick 으로 감싼 영역. 단, `` ` `` 자체를 보존하기 위해 greedy-non-greedy 사용.
  out = out.replace(/`([^`\n]+?)`/g, (_m, code) => `<code>${code}</code>`);
  // 줄바꿈 → <br/>
  out = out.replace(/\n/g, '<br/>');
  return out;
};

export const renderPrompt = (md: string): string => {
  const lines = md.split('\n');
  const out: string[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const fence = line.match(/^```([a-zA-Z0-9_+-]*)\s*$/);
    if (fence) {
      const lang = fence[1] || '';
      // 펜스 닫기 찾기
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !/^```\s*$/.test(lines[i])) {
        codeLines.push(lines[i]);
        i++;
      }
      // 닫는 펜스 소비
      if (i < lines.length) i++;
      const codeHtml = escape(codeLines.join('\n'));
      const langClass = lang ? ` class="lang-${lang}"` : '';
      out.push(
        `<pre class="q-code"><code${langClass}>${codeHtml}</code></pre>`
      );
    } else {
      // 일반 텍스트 라인 — 인라인 처리해서 누적
      out.push(inline(line));
      i++;
    }
  }
  return out.join('\n');
};
