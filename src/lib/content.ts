import type { Question } from './store';
import extraChaptersData from './extra-chapters.json';

/**
 * 시드 콘텐츠 — Java 입문 챕터.
 * 해설은 humanize-korean 규칙을 적용해 작성: 짧고, 번역투 없이, 코드/용어는 영문 보존.
 */
export const chapters = [
  {
    id: 'java-basics',
    title: 'Java 기초',
    blurb: '변수, 자료형, 제어 흐름, 메서드, 컬렉션, 예외, 람다 — 첫 30일의 기반을 다집니다.',
    track: 'Java',
    order: 1,
    estMinutes: 60,
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
      {
        id: 'jb-11',
        type: 'mcq',
        chapter: 'java-basics',
        prompt: '자바의 `String` 클래스에 대한 설명으로 옳은 것은?',
        choices: [
          '원시 타입(primitive type)이다.',
          '한 번 생성된 문자열은 내용이 변하지 않는다 (immutable).',
          '`==` 연산자는 항상 문자열의 내용을 비교한다.',
          '`new String("a")` 와 `"a"` 는 항상 같은 객체를 가리킨다.',
        ],
        answer: 1,
        explanation:
          '`String`은 참조 타입이며 한 번 만들어지면 내부 문자 배열이 바뀔 수 없습니다. 더하기 연산을 하면 새 `String` 인스턴스가 만들어져요. 같은 리터럴은 상수 풀에 캐시되지만 `new String(...)`은 새 객체라 `==`는 false가 될 수 있습니다.',
        xp: 10,
      },
      {
        id: 'jb-12',
        type: 'mcq',
        chapter: 'java-basics',
        prompt: '다음 중 `ArrayList`에 대한 설명으로 옳지 않은 것은?',
        choices: [
          '크기가 가변적인 리스트다.',
          '원시 타입(`int`, `double` 등)을 그대로 담을 수 없다.',
          '인덱스로 접근하는 데 O(1) 시간이 든다.',
          '중간에 원소를 삽입/삭제하는 데 항상 O(1) 시간이 든다.',
        ],
        answer: 3,
        explanation:
          '중간 삽입/삭제는 뒤의 원소들을 밀거나 당겨야 해서 평균 O(n)입니다. 끝에 추가/삭제하는 `add`/`remove(last)`만 amortized O(1)이라 보면 됩니다.',
        xp: 15,
      },
      {
        id: 'jb-13',
        type: 'mcq',
        chapter: 'java-basics',
        prompt: '자바의 예외 처리에서 `try-catch-finally` 의 `finally` 블록에 대한 설명으로 옳은 것은?',
        choices: [
          '예외가 발생하지 않으면 절대 실행되지 않는다.',
          '`return` 문을 만나도 `finally`는 실행된다.',
          '`finally` 안에서는 예외를 던질 수 없다.',
          '`catch` 블록이 없으면 `finally`를 단독으로 쓸 수 있다.',
        ],
        answer: 1,
        explanation:
          '`finally`는 예외 발생 여부, `return` 포함 어떤 경우에도 (정상 종료/예외/JVM 종료 일부 케이스 제외) 실행됩니다. 단독 `finally`는 자바 문법상 불가 — `try`가 필요해요. `finally`에서도 예외는 던질 수 있지만 보통 자제합니다.',
        xp: 15,
      },
      {
        id: 'jb-14',
        type: 'mcq',
        chapter: 'java-basics',
        prompt: '다음 중 `HashMap`의 키로 사용하기에 가장 부적절한 타입은?',
        choices: [
          '`String`',
          '`Integer`',
          'equals와 hashCode를 오버라이드한 사용자 정의 클래스',
          '가변 상태를 가진 가변 객체 (예: `StringBuilder`)',
        ],
        answer: 3,
        explanation:
          'HashMap은 키의 `hashCode()`로 버킷을 정합니다. 키 객체의 상태가 바뀔 수 있으면 `hashCode()` 결과도 같이 바뀌어 같은 키를 찾지 못할 수 있어요. 불변 객체나 `equals`/`hashCode`가 안정적인 값만 키로 쓰는 게 안전합니다.',
        xp: 15,
      },
      {
        id: 'jb-15',
        type: 'mcq',
        chapter: 'java-basics',
        prompt: '자바의 접근 제어자 중 같은 패키지 안에서만 접근할 수 있는 것은?',
        choices: ['private', 'default (package-private)', 'protected', 'public'],
        answer: 1,
        explanation:
          '`private`는 같은 클래스, `default`는 같은 패키지, `protected`는 같은 패키지 + 자식 클래스, `public`은 어디서나. 별도 키워드가 없는 default 접근이 "패키지 전용"이에요.',
        xp: 10,
      },
      {
        id: 'jb-16',
        type: 'mcq',
        chapter: 'java-basics',
        prompt: '다음 중 자바의 람다 표현식으로 옳은 것은?',
        choices: [
          '(int x, y) -> x + y',
          '(x, y) -> { return x + y; }',
          'x, y -> x + y',
          'function(x) { return x * 2; }',
        ],
        answer: 1,
        explanation:
          '자바 람다는 `(매개변수) -> 본문` 형태. 매개변수 타입은 생략 가능하므로 `(x, y)`는 OK, `(int x, y)`처럼 일부만 적을 수 없습니다. 본문이 한 줄이면 중괄호와 `return` 생략 가능. 자바는 `function` 키워드가 없어요.',
        xp: 15,
      },
      {
        id: 'jb-17',
        type: 'mcq',
        chapter: 'java-basics',
        prompt: '`Optional<String> name = Optional.ofNullable(getName());` 다음 중 옳은 사용은?',
        choices: [
          '`String n = name.get();` (값이 없을 수도 있는데 바로 꺼냄)',
          '`String n = name.orElse("anonymous");`',
          '`if (name == null) { ... }`',
          '`if (name.isPresent() && name.get().length() > 0) { ... }` (위와 동등한 안전한 표현)',
        ],
        answer: 1,
        explanation:
          '`orElse`는 값이 없을 때 기본값을 돌려주므로 안전합니다. `get()`은 값이 없으면 `NoSuchElementException`. `Optional` 자체가 `null`이 될 일은 거의 없으니 `name == null` 비교는 보통 잘못된 사용이에요.',
        xp: 15,
      },
      {
        id: 'jb-18',
        type: 'mcq',
        chapter: 'java-basics',
        prompt: '`var list = new ArrayList<String>();` 처럼 `var`를 쓸 수 있는 자바 버전은?',
        choices: ['Java 8', 'Java 10', 'Java 14', 'Java 17'],
        answer: 1,
        explanation:
          '지역 변수의 타입 추론 `var`는 Java 10에서 처음 도입됐습니다. (메서드 시그니처, 필드에는 여전히 못 써요.) 이후 Java 11~17에서 `var` 사용 범위가 점차 넓어졌지만, 처음 등장한 버전은 10.',
        xp: 10,
      },
      {
        id: 'jb-19',
        type: 'fill',
        chapter: 'java-basics',
        prompt:
          '다음 코드의 출력은?\n\n```java\nString s = "Hello";\nSystem.out.println(s._____(0));   // 빈칸: 대문자 H를 꺼내려면?\n```\n\n빈칸에 들어갈 메서드 이름을 쓰시오 (소문자).',
        blanks: [
          { placeholder: 'method', answer: ['charat'], hint: 'String에서 인덱스의 문자를 돌려주는 메서드' },
        ],
        explanation:
          '`String.charAt(int index)`는 인덱스 위치의 `char`를 돌려줍니다. `s.charAt(0)` → `\'H\'`. 비슷한 이름에 `indexOf`는 문자의 위치를 찾는 메서드라 헷갈리기 쉬워요.',
        xp: 15,
      },
      {
        id: 'jb-20',
        type: 'mcq',
        chapter: 'java-basics',
        prompt: '자바의 가비지 컬렉션(GC)에 대한 설명으로 가장 적절한 것은?',
        choices: [
          '개발자가 임의로 객체의 메모리를 해제할 수 있다.',
          '더 이상 참조되지 않는 객체를 자동으로 회수한다.',
          '메모리 누수가 절대 발생하지 않는다.',
          '성능에 영향을 주지 않는다.',
        ],
        answer: 1,
        explanation:
          'GC의 핵심은 *도달 불가능*한 객체 — 어떤 살아있는 참조로도 도달할 수 없는 객체 — 를 자동으로 회수하는 것입니다. 개발자가 직접 free 할 수는 없어요. 다만 *도달 가능하지만 의도치 않게 잡혀 있는* 객체는 회수되지 않으므로 메모리 누수는 여전히 발생합니다. GC가 동작하는 동안에는 보통 Stop-The-World가 일어나 성능에 영향을 줍니다.',
        xp: 15,
      },
    ] satisfies Question[],
  },
  {
    id: 'oop',
    title: '객체지향',
    blurb: '클래스, 상속, 다형성, 캡슐화, SOLID — 객체지향 4기둥과 5원칙.',
    track: 'Java',
    order: 2,
    estMinutes: 50,
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
      {
        id: 'oop-04',
        type: 'mcq',
        chapter: 'oop',
        prompt: '자바의 인터페이스(interface)에 대한 설명으로 옳은 것은?',
        choices: [
          '인스턴스 필드를 가질 수 있다 (Java 8 이전과 동일).',
          '메서드는 기본적으로 `public abstract` 다.',
          '한 클래스에서 여러 인터페이스를 구현할 수 없다.',
          '생성자를 가질 수 있다.',
        ],
        answer: 1,
        explanation:
          '인터페이스의 메서드는 기본적으로 `public abstract`입니다. Java 8부터 `default`/`static` 메서드로 구현을 가질 수 있게 됐고, Java 9부터 `private` 메서드도 가능해졌어요. 다중 구현(`implements A, B`)은 자유롭고, 인터페이스는 생성자를 가질 수 없습니다.',
        xp: 15,
      },
      {
        id: 'oop-05',
        type: 'mcq',
        chapter: 'oop',
        prompt: '`abstract` 클래스와 `interface`의 차이로 가장 적절한 것은?',
        choices: [
          'abstract 클래스는 다중 상속이 가능하다.',
          'interface는 필드를 가질 수 없다.',
          'abstract 클래스는 상태(필드)와 부분 구현을 가질 수 있다.',
          'interface의 모든 메서드는 항상 public이다.',
        ],
        answer: 2,
        explanation:
          'abstract 클래스는 일반 필드와 일반 메서드를 가질 수 있어 "is-a" 관계의 공통 구현을 모으는 데 쓰입니다. 인터페이스는 본래 "기능 계약"을 표현하는 용도였고, Java 8 이후 default 메서드로 구현이 일부 가능해졌지만 상태(인스턴스 필드)는 못 가져요. 둘 다 메서드는 `public`이 기본.',
        xp: 15,
      },
      {
        id: 'oop-06',
        type: 'mcq',
        chapter: 'oop',
        prompt: 'SOLID 원칙 중 "확장에는 열려 있고, 변경에는 닫혀 있어야 한다"는 것은?',
        choices: [
          'Single Responsibility (단일 책임)',
          'Open/Closed (개방-폐쇄)',
          'Liskov Substitution (리스코프 치환)',
          'Dependency Inversion (의존성 역전)',
        ],
        answer: 1,
        explanation:
          '개방-폐쇄 원칙(OCP): 기존 코드를 수정하지 않고도 새 기능을 추가할 수 있어야 한다는 뜻. 다형성/추상화를 통해 보통 만족합니다. SRP는 "한 클래스는 하나의 책임만", LSP는 "자식 타입은 부모 타입을 대체할 수 있어야", DIP는 "구체 타입이 아닌 추상에 의존하라".',
        xp: 15,
      },
      {
        id: 'oop-07',
        type: 'mcq',
        chapter: 'oop',
        prompt: '리스코프 치환 원칙(LSP)을 어기는 흔한 예는?',
        choices: [
          '자식 클래스가 부모의 동작을 그대로 오버라이드한다.',
          '자식 클래스가 부모 메서드의 의미를 바꿔서, 부모 타입 자리에 넣으면 동작이 깨진다.',
          '자식 클래스가 부모 생성자를 호출한다.',
          '자식 클래스에 새로운 메서드를 추가한다.',
        ],
        answer: 1,
        explanation:
          'LSP 위반의 전형: `Square extends Rectangle`인데 `setWidth`/`setHeight`를 오버라이드해 직각을 강제하면, `Rectangle` 자리에서 사용하는 코드가 깨집니다. 정사각형이 직사각형의 의미적 부분집합이 *아니라* 일반화 관계가 잘못된 거예요. 단순히 메서드 추가나 생성자 호출은 위반이 아닙니다.',
        xp: 15,
      },
      {
        id: 'oop-08',
        type: 'mcq',
        chapter: 'oop',
        prompt: '`@Override` 어노테이션을 다는 이유로 가장 적절한 것은?',
        choices: [
          '런타임에 메서드 호출이 빨라진다.',
          '오버라이드하려는 시그니처가 부모에 없으면 컴파일 에러로 잡아준다.',
          '자식 클래스에서만 쓸 수 있는 접근 제어자를 자동으로 부여한다.',
          '자동으로 `final` 키워드가 붙는다.',
        ],
        answer: 1,
        explanation:
          '`@Override`는 시그니처 오타(매개변수 다름 등)로 오버로드가 되어버리는 실수를 컴파일러가 잡아주게 합니다. 성능 최적화나 final 자동화 같은 효과는 없어요.',
        xp: 10,
      },
      {
        id: 'oop-09',
        type: 'mcq',
        chapter: 'oop',
        prompt: '다음 중 생성자(Constructor)에 대한 설명으로 옳은 것은?',
        choices: [
          '반환 타입을 명시해야 한다.',
          '클래스 이름과 다른 이름으로 정의할 수 있다.',
          '명시적으로 정의하지 않으면 컴파일러가 기본 생성자(no-args)를 자동으로 추가해준다 (필드 초기화는 안 함).',
          '한 클래스에는 생성자를 하나만 정의할 수 있다.',
        ],
        answer: 2,
        explanation:
          '생성자는 반환 타입이 없고, 이름은 클래스 이름과 같아야 합니다. 매개변수가 다른 여러 생성자를 오버로딩할 수 있어요. 직접 어떤 생성자든 만들면 컴파일러는 더 이상 기본 생성자를 자동으로 추가하지 않습니다 — 이게 흔한 "no-args 생성자 없다" 함정의 원인.',
        xp: 15,
      },
      {
        id: 'oop-10',
        type: 'mcq',
        chapter: 'oop',
        prompt: '`final`로 선언된 클래스에 대한 설명으로 옳은 것은?',
        choices: [
          '이 클래스는 인스턴스화할 수 없다.',
          '이 클래스는 상속할 수 없다 (서브클래스를 만들 수 없다).',
          '이 클래스의 모든 메서드는 자동으로 `static` 이 된다.',
          '이 클래스의 모든 필드는 자동으로 `volatile` 이 된다.',
        ],
        answer: 1,
        explanation:
          '`final class`는 상속이 금지되어 서브클래스를 만들 수 없습니다. 대표 예: `String`, `Integer` 같은 불변 값 객체. 인스턴스화는 막지 않아요(생성자가 `private`인 경우만 막힘). `static`/`volatile`과는 무관합니다.',
        xp: 10,
      },
      {
        id: 'oop-11',
        type: 'fill',
        chapter: 'oop',
        prompt:
          '다음 코드의 출력은?\n\n```java\nclass A { String name = "A"; }\nclass B extends A { String name = "B"; }\nA x = new B();\nSystem.out.println(x.____);\n```\n\n빈칸: `x`의 *컴파일 시점* 타입에 있는 필드 `name`을 출력하려면? (자바 키워드 또는 식)',
        blanks: [
          { placeholder: 'expr', answer: ['name'], hint: '필드 이름 그대로' },
        ],
        explanation:
          '자바의 필드는 다형적이지 않습니다. `x`의 컴파일 타입이 `A`이므로 `x.name`은 A의 name ("A")을 가리킵니다. 메서드와 다르게 필드는 *오버라이드*가 아니라 *섀도잉*이에요. 메서드는 실제 객체 타입의 구현이 실행되지만 필드는 참조 변수의 선언 타입이 결정합니다.',
        xp: 20,
      },
      {
        id: 'oop-12',
        type: 'mcq',
        chapter: 'oop',
        prompt: '의존성 주입(Dependency Injection)의 핵심 이점으로 가장 적절한 것은?',
        choices: [
          '객체의 생성 속도가 빨라진다.',
          '클래스가 직접 의존 객체를 만들지 않아 결합도가 낮아지고 테스트가 쉬워진다.',
          'JVM의 가비지 컬렉션 부담이 줄어든다.',
          'final 키워드를 더 많이 쓸 수 있게 된다.',
        ],
        answer: 1,
        explanation:
          'DI의 핵심은 *제어의 역전*: 객체가 필요한 의존성을 직접 `new`하지 않고 외부에서 주입받습니다. 그러면 구현체를 쉽게 교체할 수 있고, 테스트 시에는 모의 객체(mock)를 끼워 넣을 수 있어요. 성능/GC와는 직접 관계가 없습니다.',
        xp: 15,
      },
    ] satisfies Question[],
  },
];

export const allQuestions = (): Question[] => {
  const all = [
    ...chapters.flatMap((c) => c.questions as unknown as Question[]),
    ...(extraChaptersData as any[]).flatMap((c) => c.questions as unknown as Question[]),
  ];
  return all;
};

export const findChapter = (id: string) => {
  const all = [...chapters, ...(extraChaptersData as any[])];
  return all.find((c) => c.id === id);
};
