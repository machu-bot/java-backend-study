import type { Question } from './store';

/**
 * 시드 콘텐츠 — Java 입문 챕터.
 * 해설은 humanize-korean 규칙을 적용해 작성: 짧고, 번역투 없이, 코드/용어는 영문 보존.
 */
export const chapters = [
  {
    id: 'java-basics',
    title: 'Java 기초',
    blurb: '변수, 자료형, 제어 흐름, 메서드까지 — 첫 30일의 기반을 다집니다.',
    track: 'Java',
    order: 1,
    estMinutes: 45,
    questions: [
      {
        id: 'jb-01',
        type: 'mcq',
        chapter: 'java-basics',
        prompt: 'Java에서 정수형 변수 하나를 선언하려고 한다. 다음 중 컴파일되는 선언은?',
        choices: [
          'int number = "42";',
          'int number = 42;',
          'Integer number = 42.0;',
          'integer number = 42;',
        ],
        answer: 1,
        explanation:
          '`int`는 32비트 정수 자료형이라 정수 리터럴(42)만 받습니다. "42"는 문자열이라 거부되고, 42.0은 실수형, `integer`라는 키워드는 자바에 없습니다.',
        xp: 10,
      },
      {
        id: 'jb-02',
        type: 'mcq',
        chapter: 'java-basics',
        prompt: '다음 중 `final` 키워드로 변수에 붙였을 때의 의미로 가장 정확한 것은?',
        choices: [
          '변수 값을 나중에 변경할 수 없다 (재할당 불가).',
          '변수가 메모리에서 삭제되지 않는다.',
          '변수를 다른 스레드에서 접근할 수 없다.',
          '변수가 정적(static)으로 바뀐다.',
        ],
        answer: 0,
        explanation:
          '`final` 변수는 한 번만 값을 대입할 수 있습니다. 그 뒤로 재할당을 시도하면 컴파일 에러가 납니다. "상수"라 부르는 이유입니다.',
        xp: 10,
      },
      {
        id: 'jb-03',
        type: 'mcq',
        chapter: 'java-basics',
        prompt: '다음 코드의 출력은?\n\n```java\nString a = "hello";\nString b = "hello";\nSystem.out.println(a == b);\n```',
        choices: ['true', 'false', '컴파일 에러', '런타임 에러'],
        answer: 0,
        explanation:
          '자바의 문자열 리터럴은 **문자열 상수 풀**에 캐시됩니다. 같은 리터럴을 두 번 쓰면 같은 참조가 공유되므로 `==`도 `true`입니다. 단, `new String("hello")` 처럼 새로 만들면 `==`는 `false`가 됩니다. 값 비교는 항상 `equals()`로.',
        xp: 15,
      },
      {
        id: 'jb-04',
        type: 'mcq',
        chapter: 'java-basics',
        prompt: '다음 for 루프의 출력 횟수는?\n\n```java\nfor (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}\n```',
        choices: ['4번', '5번', '6번', '무한'],
        answer: 1,
        explanation:
          'i는 0,1,2,3,4 — 다섯 번 돌고 i=5가 되는 순간 조건이 false라 멈춥니다. 흔한 실수는 `<=`를 써서 0~5, 여섯 번 도는 경우입니다.',
        xp: 10,
      },
      {
        id: 'jb-05',
        type: 'mcq',
        chapter: 'java-basics',
        prompt: '배열 `int[] arr = new int[3];` 의 초기값으로 올바른 것은?',
        choices: ['[1, 2, 3]', '[null, null, null]', '[0, 0, 0]', '정의되지 않음'],
        answer: 2,
        explanation:
          '자바에서 `int` 배열은 자동으로 `0`으로 초기화됩니다. `boolean`은 `false`, 객체 참조 배열은 `null`이 기본값입니다. C와 달리 "쓰레기 값"이 나오지 않습니다.',
        xp: 10,
      },
      {
        id: 'jb-06',
        type: 'fill',
        chapter: 'java-basics',
        prompt:
          '다음 코드의 빈칸을 채워 `Hello, World!`를 출력하시오.\n\n```java\npublic class Main {\n  public static void main(String[] ____) {\n    System.out._____.println("Hello, World!");\n  }\n}\n```',
        blanks: [
          { placeholder: 'args', answer: ['args'], hint: '명령줄 인자를 받는 관례적 이름' },
          { placeholder: 'out', answer: ['out'], hint: '표준 출력 스트림' },
        ],
        explanation:
          '`main` 메서드의 시그니처는 `public static void main(String[] args)`, 표준 출력은 `System.out`입니다. `out`은 `System` 클래스의 `static final PrintStream` 필드예요.',
        xp: 20,
      },
      {
        id: 'jb-07',
        type: 'mcq',
        chapter: 'java-basics',
        prompt: '메서드 오버로딩이 성립하려면 반드시 달라야 하는 것은?',
        choices: [
          '메서드 이름',
          '반환 타입',
          '매개변수 목록(개수 또는 타입)',
          '접근 제어자',
        ],
        answer: 2,
        explanation:
          '오버로딩은 **매개변수 목록**이 달라야 성립합니다. 반환 타입만 다르거나 접근 제어자만 다른 건 오버로드가 아니라 컴파일 에러입니다. 이름은 같아야 하죠.',
        xp: 15,
      },
      {
        id: 'jb-08',
        type: 'mcq',
        chapter: 'java-basics',
        prompt: '`null`에 대해 다음 중 옳은 것은?',
        choices: [
          '원시 타입(int, double 등)에도 대입할 수 있다.',
          '객체 참조 변수가 "아무것도 가리키지 않음"을 뜻한다.',
          '`null == 0` 은 `true`다.',
          '`null.toString()` 을 호출하면 컴파일 에러가 발생한다.',
        ],
        answer: 1,
        explanation:
          '`null`은 참조 타입에만 대입할 수 있고, 원시 타입에는 못 씁니다. `null.toString()`은 컴파일은 되지만 런타임에 `NullPointerException`이 납니다.',
        xp: 10,
      },
      {
        id: 'jb-09',
        type: 'mcq',
        chapter: 'java-basics',
        prompt: '다음 코드의 결과는?\n\n```java\nString s = null;\nSystem.out.println(s.length());\n```',
        choices: [
          '0을 출력한다.',
          '컴파일 에러가 발생한다.',
          'NullPointerException이 런타임에 발생한다.',
          '빈 문자열이 출력된다.',
        ],
        answer: 2,
        explanation:
          '`s`가 `null`이라 `s.length()`를 호출하는 순간 `NullPointerException`(NPE)이 런타임에 던져집니다. `s != null` 체크 또는 `Optional`로 방어하는 게 일반적입니다.',
        xp: 15,
      },
      {
        id: 'jb-10',
        type: 'fill',
        chapter: 'java-basics',
        prompt:
          '다음 코드의 출력은?\n\n```java\nint x = 7;\nint y = x ____ 2;   // 빈칸에 연산자\nSystem.out.println(y);\n```\n\n빈칸에 들어갈 연산자를 쓰시오. 단, 출력은 1이 나와야 한다.',
        blanks: [
          { placeholder: 'op', answer: ['%'], hint: '7을 2로 나눈 나머지' },
        ],
        explanation:
          '`%`는 나머지 연산자입니다. 7 % 2 = 1. 홀짝 판별, 순환 인덱스 계산에 자주 쓰여요. `/`는 정수끼리 나누면 소수점을 버리므로 7 / 2 = 3이 됩니다(다른 결과).',
        xp: 15,
      },
    ] satisfies Question[],
  },
  {
    id: 'oop',
    title: '객체지향',
    blurb: '클래스, 상속, 다형성, 캡슐화 — 객체지향 4기둥을 인터랙티브하게.',
    track: 'Java',
    order: 2,
    estMinutes: 30,
    questions: [
      {
        id: 'oop-01',
        type: 'mcq',
        chapter: 'oop',
        prompt: '캡슐화의 핵심 의도로 가장 적절한 것은?',
        choices: [
          '데이터와 메서드를 한 곳에 묶고 외부 접근을 통제한다.',
          '코드 줄 수를 줄인다.',
          '실행 속도를 높인다.',
          '상속을 강제한다.',
        ],
        answer: 0,
        explanation:
          '캡슐화는 필드를 `private`로 숨기고, 접근은 `public` 메서드(getter/setter 등)로만 허용하는 것입니다. 불변식을 한 곳에서 관리할 수 있어 유지보수가 쉬워져요.',
        xp: 10,
      },
      {
        id: 'oop-02',
        type: 'mcq',
        chapter: 'oop',
        prompt: '자바의 다형성(polymorphism)을 가장 잘 보여주는 코드는?',
        choices: [
          '`int a = 1; int b = 2;`',
          '`Animal a = new Dog(); a.sound();`',
          '`class A {} class B extends A {}`',
          '`private int x;`',
        ],
        answer: 1,
        explanation:
          '부모 타입(`Animal`) 변수가 자식 인스턴스(`Dog`)를 참조하고, 오버라이드된 메서드를 호출하면 실제 객체 타입의 메서드가 실행됩니다 — 이게 다형성입니다. (3번은 상속이지 다형성이 아니에요.)',
        xp: 15,
      },
      {
        id: 'oop-03',
        type: 'mcq',
        chapter: 'oop',
        prompt: '자바에서 클래스가 다른 클래스를 상속받기 위해 사용하는 키워드는?',
        choices: ['implements', 'extends', 'inherits', 'super'],
        answer: 1,
        explanation:
          '`class Dog extends Animal`. 자바는 단일 상속만 허용합니다. 인터페이스 구현은 `implements`이고, `super`는 부모 생성자/메서드 호출에 씁니다.',
        xp: 10,
      },
    ] satisfies Question[],
  },
];

export const allQuestions = (): Question[] =>
  chapters.flatMap((c) => c.questions as unknown as Question[]);

export const findChapter = (id: string) => chapters.find((c) => c.id === id);
