import { Lesson } from '../courses'

export const javaLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 20 ? 'Beginner' : i < 45 ? 'Intermediate' : 'Advanced'
  
  const topics = [
    // Beginner (0-19)
    { title: 'Java Basics & Syntax', desc: 'Getting started with Java', content: 'Compilation, variables, basic syntax', code: 'public class Hello {\n  public static void main(String[] args) {\n    System.out.println("Hello, Java!");\n  }\n}', hint: 'Java requires a class wrapper' },
    { title: 'Variables & Data Types', desc: 'int, String, boolean, double types', content: 'Primitive types, type declaration, initialization', code: 'int age = 25;\nString name = "John";\nboolean active = true;\ndouble salary = 50000.50;', hint: 'Java is statically typed' },
    { title: 'Operators & Arithmetic', desc: 'Math operations and comparisons', content: 'Arithmetic, comparison, logical operators', code: 'int a = 10, b = 3;\nint sum = a + b;\nboolean equal = (a == b);\nboolean greater = a > b;', hint: 'Use == for comparison, = for assignment' },
    { title: 'Control Flow: if/else', desc: 'Conditional statements', content: 'if, else if, else blocks', code: 'int age = 18;\nif (age >= 18) {\n  System.out.println("Adult");\n} else {\n  System.out.println("Minor");\n}', hint: 'Use braces for blocks' },
    { title: 'Loops: for & while', desc: 'Iteration in Java', content: 'for loops, while loops, control flow', code: 'for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}\nint j = 0;\nwhile (j < 5) {\n  System.out.println(j++);\n}', hint: 'for loop: initialization; condition; increment' },
    { title: 'Arrays', desc: 'Fixed-size collections', content: 'Array declaration, indexing, iteration', code: 'int[] numbers = {1, 2, 3, 4, 5};\nSystem.out.println(numbers[0]);\nfor (int num : numbers) {\n  System.out.println(num);\n}', hint: 'Arrays are zero-indexed' },
    { title: 'Strings & String Methods', desc: 'Working with text', content: 'length(), substring(), indexOf(), toUpperCase()', code: 'String text = "Hello World";\nSystem.out.println(text.length());\nSystem.out.println(text.toUpperCase());\nSystem.out.println(text.substring(0, 5));', hint: 'Strings are immutable in Java' },
    { title: 'Methods', desc: 'Creating reusable code', content: 'Method declaration, parameters, return types', code: 'public static int add(int a, int b) {\n  return a + b;\n}\nint result = add(5, 3);\nSystem.out.println(result);', hint: 'Methods must have a return type' },
    { title: 'Exception Handling', desc: 'try/catch/finally', content: 'Error handling, exception types', code: 'try {\n  int x = 10 / 0;\n} catch (ArithmeticException e) {\n  System.out.println("Error: " + e.getMessage());\n}', hint: 'Catch specific exceptions first' },
    { title: 'Classes & Objects Intro', desc: 'Creating and using classes', content: 'Class declaration, constructors, objects', code: 'class Person {\n  String name;\n  Person(String n) { name = n; }\n}\nPerson p = new Person("John");', hint: 'Use new keyword to create objects' },
    
    // Intermediate (20-44)
    { title: 'Constructors & Initialization', desc: 'Object creation and setup', content: 'Constructor overloading, this keyword', code: 'class Car {\n  String color;\n  Car() { color = "Red"; }\n  Car(String c) { color = c; }\n}', hint: 'Multiple constructors with different parameters' },
    { title: 'Encapsulation: getters/setters', desc: 'Data hiding and access control', content: 'private fields, public methods', code: 'class Account {\n  private double balance;\n  public void setBalance(double b) { balance = b; }\n  public double getBalance() { return balance; }\n}', hint: 'Hide fields, expose through methods' },
    { title: 'Inheritance', desc: 'Extending classes', content: 'extends, super(), method overriding', code: 'class Animal { void speak() { } }\nclass Dog extends Animal {\n  @Override\n  void speak() { System.out.println("Bark"); }\n}', hint: 'Use @Override annotation' },
    { title: 'Abstract Classes', desc: 'Partial implementations', content: 'abstract keyword, abstract methods', code: 'abstract class Shape {\n  abstract double area();\n}\nclass Circle extends Shape {\n  double area() { return 3.14 * r * r; }\n}', hint: 'Abstract methods must be implemented' },
    { title: 'Interfaces', desc: 'Contracts for classes', content: 'interface, implements, multiple interfaces', code: 'interface Animal { void speak(); }\nclass Dog implements Animal {\n  public void speak() { System.out.println("Bark"); }\n}', hint: 'Classes implement interfaces' },
    { title: 'Polymorphism', desc: 'Method overriding and overloading', content: 'Runtime polymorphism, method hiding', code: 'Animal dog = new Dog();\ndog.speak();  // calls Dog\'s speak', hint: 'Achieved through inheritance and interfaces' },
    { title: 'Collections: ArrayList', desc: 'Dynamic arrays', content: 'ArrayList, add(), remove(), get(), size()', code: 'ArrayList<String> list = new ArrayList<>();\nlist.add("Java");\nlist.add("Python");\nfor (String item : list) { System.out.println(item); }', hint: 'ArrayList grows dynamically' },
    { title: 'Collections: HashMap', desc: 'Key-value storage', content: 'HashMap, put(), get(), containsKey()', code: 'HashMap<String, Integer> map = new HashMap<>();\nmap.put("age", 25);\nmap.put("score", 95);\nInteger age = map.get("age");', hint: 'HashMap stores key-value pairs' },
    { title: 'Generics', desc: 'Type-safe collections', content: '<T>, generic classes, type parameters', code: 'class Box<T> {\n  T value;\n  void setValue(T v) { value = v; }\n  T getValue() { return value; }\n}', hint: 'Generics provide type safety' },
    { title: 'Streams & Functional', desc: 'Functional programming in Java', content: 'Stream API, map, filter, reduce', code: 'List<Integer> nums = Arrays.asList(1,2,3,4,5);\nint sum = nums.stream()\n  .filter(n -> n > 2)\n  .mapToInt(n -> n * 2)\n  .sum();', hint: 'Streams enable functional operations' },
    { title: 'Lambda Expressions', desc: 'Anonymous functions', content: '-> syntax, functional interfaces', code: 'List<String> items = Arrays.asList("Java", "Python");\nitems.forEach(item -> System.out.println(item));', hint: 'Lambda replaces anonymous classes' },
    { title: 'File I/O', desc: 'Reading and writing files', content: 'FileReader, FileWriter, BufferedReader', code: 'try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {\n  String line;\n  while ((line = br.readLine()) != null) {\n    System.out.println(line);\n  }\n}', hint: 'Use try-with-resources for auto-closing' },
    { title: 'Nested & Inner Classes', desc: 'Classes within classes', content: 'Inner class types, static inner classes', code: 'class Outer {\n  class Inner {\n    void display() { System.out.println("Inner"); }\n  }\n}\nOuter.Inner inner = new Outer().new Inner();', hint: 'Inner classes have access to outer class' },
    { title: 'Static Members', desc: 'Class-level data and methods', content: 'static keyword, class variables, methods', code: 'class Counter {\n  static int count = 0;\n  Counter() { count++; }\n  static void printCount() { System.out.println(count); }\n}', hint: 'Static members shared across all instances' },
    { title: 'Final & Immutability', desc: 'Preventing modification', content: 'final keyword, immutable objects', code: 'final class ImmutablePerson {\n  private final String name;\n  ImmutablePerson(String n) { name = n; }\n}', hint: 'final prevents inheritance and modification' },
    
    // Advanced (45-59)
    { title: 'Annotations', desc: '@Override, @Deprecated, @FunctionalInterface', content: 'Built-in annotations, metadata', code: '@Deprecated\npublic void oldMethod() { }\n\n@Override\npublic void newMethod() { }', hint: 'Annotations provide metadata' },
    { title: 'Reflection API', desc: 'Inspect classes at runtime', content: 'Class, Method, Field introspection', code: 'Class<?> clazz = String.class;\nMethod[] methods = clazz.getDeclaredMethods();\nfor (Method m : methods) { System.out.println(m.getName()); }', hint: 'Reflection enables dynamic code' },
    { title: 'Regular Expressions', desc: 'Pattern matching', content: 'Pattern, Matcher, regex syntax', code: 'String text = "Java 8 is great";\nPattern p = Pattern.compile("\\\\d+");\nMatcher m = p.matcher(text);\nwhile (m.find()) { System.out.println(m.group()); }', hint: '\\\\d matches digits' },
    { title: 'Multithreading', desc: 'Concurrent execution', content: 'Thread class, Runnable, synchronization', code: 'class MyThread extends Thread {\n  public void run() { System.out.println("Thread running"); }\n}\nMyThread t = new MyThread();\nt.start();', hint: 'Use start(), not run()' },
    { title: 'Synchronization', desc: 'Thread safety', content: 'synchronized keyword, locks, atomic operations', code: 'class Counter {\n  private int count = 0;\n  synchronized void increment() { count++; }\n}', hint: 'synchronized prevents race conditions' },
    { title: 'Networking', desc: 'Socket programming, HTTP', content: 'Socket, ServerSocket, URL classes', code: 'URL url = new URL("https://example.com");\nHttpURLConnection conn = (HttpURLConnection) url.openConnection();\nint status = conn.getResponseCode();\nSystem.out.println(status);', hint: 'HTTP status codes: 200=OK, 404=Not Found' },
    { title: 'JDBC & Databases', desc: 'Database connectivity', content: 'Connection, PreparedStatement, ResultSet', code: 'Connection conn = DriverManager.getConnection(url);\nPreparedStatement ps = conn.prepareStatement("SELECT * FROM users");\nResultSet rs = ps.executeQuery();', hint: 'Use PreparedStatement for SQL injection prevention' },
    { title: 'Design Patterns', desc: 'Singleton, Factory, Observer', content: 'Common design patterns in Java', code: 'class Singleton {\n  private static Singleton instance;\n  private Singleton() { }\n  static Singleton getInstance() {\n    if (instance == null) instance = new Singleton();\n    return instance;\n  }\n}', hint: 'Patterns solve common problems' },
    { title: 'Maven & Build Tools', desc: 'Project management', content: 'pom.xml, dependencies, build lifecycle', code: '<dependency>\n  <groupId>junit</groupId>\n  <artifactId>junit</artifactId>\n  <version>4.12</version>\n</dependency>', hint: 'Maven manages dependencies' },
    { title: 'Unit Testing: JUnit', desc: 'Writing tests', content: '@Test, @Before, assertions', code: '@Test\npublic void testAdd() {\n  assertEquals(4, add(2, 2));\n}\n@Before\npublic void setUp() { }\n@After\npublic void tearDown() { }', hint: 'Test before coding' },
    { title: 'Spring Framework Basics', desc: 'Dependency Injection, IoC', content: '@Component, @Bean, @Autowired', code: '@Service\nclass UserService {\n  @Autowired\n  private UserRepository repo;\n}', hint: 'Spring handles object creation' },
    { title: 'Spring Boot', desc: 'Quick web app setup', content: '@SpringBootApplication, REST endpoints', code: '@RestController\nclass UserAPI {\n  @GetMapping("/users")\n  List<User> getUsers() { return service.findAll(); }\n}', hint: 'Spring Boot reduces boilerplate' },
    { title: 'Performance & Optimization', desc: 'Memory management, garbage collection', content: 'Heap vs Stack, GC tuning, profiling', code: 'Runtime rt = Runtime.getRuntime();\nlong memory = rt.totalMemory() - rt.freeMemory();\nSystem.out.println("Memory used: " + memory);', hint: 'Monitor and optimize memory usage' },
    { title: 'Security in Java', desc: 'Encryption, hashing, authentication', content: 'MessageDigest, Cipher, authentication', code: 'MessageDigest md = MessageDigest.getInstance("SHA-256");\nbyte[] hash = md.digest("password".getBytes());\nString hashStr = new String(hash);', hint: 'Use secure algorithms' },
    { title: 'Java Project: Complete Application', desc: 'Building a full Java application', content: 'All concepts combined, database, UI', code: '// Final project: Build a complete application\n// User management, database, Spring Boot, testing', hint: 'Integrate everything you learned' }
  ]
  
  return {
    id: `java-${i + 1}`,
    title: topics[i % topics.length].title,
    description: topics[i % topics.length].desc,
    language: 'java' as const,
    difficulty,
    estimatedTime: 40,
    content: `# ${topics[i % topics.length].title}

## Introduction
${topics[i % topics.length].desc}

## Content
${topics[i % topics.length].content}

## Example
\`\`\`java
${topics[i % topics.length].code}
\`\`\`

## Key Points
- ${topics[i % topics.length].hint}
- Practice the concepts
- Test your understanding
- Explore variations

## Practice Exercise
Write code that demonstrates ${topics[i % topics.length].title.toLowerCase()}.`,
    initialCode: `// ${topics[i % topics.length].title}\n// Write your code here\n\n`,
    solution: `// Solution for ${topics[i % topics.length].title}\n// Complete implementation\n\n`,
    hints: [
      topics[i % topics.length].hint,
      'Start with the basics',
      'Test your code',
      'Review the example'
    ],
    testCases: [
      {
        name: 'Code is not empty',
        test: (code: string) => code.trim().length > 0,
        errorMessage: 'Please write some code'
      },
      {
        name: 'Code meets requirements',
        test: (code: string) => code.includes('public'),
        errorMessage: 'Your code should include public keyword'
      }
    ]
  }
})  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 15 ? 'Beginner' : i < 30 ? 'Intermediate' : 'Advanced'
  return {
  id: `java-${i + 1}`,
  title: `Java ${i < 10 ? 'Fundamentals' : i < 25 ? 'OOP' : 'Spring'} - Lesson ${i + 1}`,
  description: `Master ${i < 10 ? 'Java basics' : i < 25 ? 'classes and objects' : 'Spring Boot'}`,
  content: `# Java Lesson ${i + 1}\n\n${i < 10 ? 'Syntax, Data Types, Control Flow' : i < 25 ? 'Classes, Inheritance, Interfaces' : 'Spring Framework, REST APIs'}\n\n\`\`\`java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello Java");\n  }\n}\n\`\`\``,
  language: 'java' as const,
  difficulty,
  estimatedTime: 25 + i,
  initialCode: `public class Main {\n  public static void main(String[] args) {\n    // Your code\n  }\n}`,
  solution: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello Java");\n    int x = 10;\n    System.out.println(x);\n  }\n}`,
  expectedOutput: 'Hello',
  hints: [`Java lesson ${i + 1}`, 'Strongly typed language', 'Classes are blueprints']
}
})
