import { Lesson } from '../courses'

export const swiftLessons: Lesson[] = Array.from({ length: 60 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 20 ? 'Beginner' : i < 45 ? 'Intermediate' : 'Advanced'
  
  const topics = [
    // Beginner (0-19)
    { title: 'Swift Basics & Print', desc: 'output and syntax', content: 'print(), Variables, Constants', code: 'print("Hello, Swift!")\nlet name = "World"\nprint("Hello, \\(name)")', hint: 'Use \\() for string interpolation' },
    { title: 'Variables & Constants', desc: 'var and let', content: 'var (mutable), let (immutable), Type Inference', code: 'var age = 25\nlet name = "John"\nvar count: Int = 10', hint: 'Prefer let over var when possible' },
    { title: 'Data Types', desc: 'basic types', content: 'Int, Double, String, Bool, Type Safety', code: 'let number: Int = 42\nlet pi: Double = 3.14\nlet text: String = "Swift"\nlet flag: Bool = true', hint: 'Swift is strongly typed' },
    { title: 'String Operations', desc: 'working with strings', content: 'Concatenation, Interpolation, count, isEmpty', code: 'let first = "Hello"\nlet second = "World"\nlet full = first + " " + second\nprint(full.count)', hint: 'Strings are collections of characters' },
    { title: 'Arrays', desc: 'ordered collections', content: 'Array<T>, [], append(), count, subscript', code: 'var numbers = [1, 2, 3, 4, 5]\nnumbers.append(6)\nprint(numbers[0])', hint: 'Arrays are zero-indexed' },
    { title: 'Dictionaries', desc: 'key-value pairs', content: 'Dictionary<Key, Value>, Subscript, updateValue()', code: 'var ages = ["Alice": 25, "Bob": 30]\nages["Charlie"] = 35\nprint(ages["Alice"]!)', hint: 'Dictionary values are optionals' },
    { title: 'Sets', desc: 'unique values', content: 'Set<T>, insert(), contains(), Uniqueness', code: 'var colors: Set = ["red", "green", "blue"]\ncolors.insert("yellow")\nprint(colors.contains("red"))', hint: 'Sets have no guaranteed order' },
    { title: 'Optionals', desc: 'handling nil values', content: 'Optional<T>, ?, nil, Unwrapping', code: 'var name: String? = "John"\nif let unwrapped = name {\n  print(unwrapped)\n}', hint: 'Optionals represent presence or absence' },
    { title: 'Optional Binding', desc: 'if let and guard let', content: 'if let, guard let, else, Optional Chaining', code: 'guard let name = optionalName else {\n  return\n}\nprint(name)', hint: 'guard exits early if nil' },
    { title: 'Nil Coalescing', desc: 'default values', content: '?? operator, Default Values, Optional Unwrapping', code: 'let name: String? = nil\nlet displayName = name ?? "Guest"\nprint(displayName)', hint: '?? provides fallback value' },
    { title: 'Functions', desc: 'reusable code', content: 'func keyword, Parameters, Return Types', code: 'func greet(name: String) -> String {\n  return "Hello, \\(name)"\n}\nprint(greet(name: "John"))', hint: 'Specify parameter labels' },
    { title: 'Function Parameters', desc: 'argument labels', content: 'External Names, Internal Names, _ omission, Default Values', code: 'func greet(_ name: String, loudly: Bool = false) -> String {\n  loudly ? "HELLO \\(name)!" : "Hello \\(name)"\n}', hint: '_ removes external label' },
    { title: 'Control Flow - If', desc: 'conditional statements', content: 'if, else if, else, Comparison Operators', code: 'let age = 18\nif age >= 18 {\n  print("Adult")\n} else {\n  print("Minor")\n}', hint: 'No parentheses needed around condition' },
    { title: 'Switch Statements', desc: 'pattern matching', content: 'switch, case, default, Multiple Patterns', code: 'let day = "Monday"\nswitch day {\ncase "Monday":\n  print("Start")\ndefault:\n  print("Other")\n}', hint: 'No break needed in Swift switch' },
    { title: 'For Loops', desc: 'iteration', content: 'for-in, Ranges, where clause, stride()', code: 'for i in 0..<5 {\n  print(i)\n}\nfor num in [1,2,3] {\n  print(num)\n}', hint: '..< is half-open range' },
    { title: 'While Loops', desc: 'condition-based iteration', content: 'while, repeat-while, break, continue', code: 'var count = 0\nwhile count < 5 {\n  print(count)\n  count += 1\n}', hint: 'repeat-while is like do-while' },
    { title: 'Closures', desc: 'anonymous functions', content: 'Closure Syntax, Trailing Closures, Capturing Values', code: 'let greet = { (name: String) -> String in\n  return "Hello, \\(name)"\n}\nprint(greet("John"))', hint: 'Closures capture surrounding context' },
    { title: 'Higher-Order Functions', desc: 'map, filter, reduce', content: 'map(), filter(), reduce(), Functional Programming', code: 'let numbers = [1, 2, 3, 4, 5]\nlet doubled = numbers.map { $0 * 2 }\nlet evens = numbers.filter { $0 % 2 == 0 }', hint: '$0 is shorthand parameter' },
    { title: 'Enumerations', desc: 'defining types', content: 'enum, case, Associated Values, Raw Values', code: 'enum Direction {\n  case north, south, east, west\n}\nlet dir = Direction.north', hint: 'Enums can have methods' },
    { title: 'Structs', desc: 'value types', content: 'struct, Properties, Methods, Memberwise Initializer', code: 'struct Person {\n  var name: String\n  var age: Int\n  func greet() {\n    print("Hi, I\'m \\(name)")\n  }\n}', hint: 'Structs are value types (copied)' },
    
    // Intermediate (20-44)
    { title: 'Classes', desc: 'reference types', content: 'class, Inheritance, Initializers, Deinitializers', code: 'class Person {\n  var name: String\n  init(name: String) {\n    self.name = name\n  }\n}', hint: 'Classes are reference types (shared)' },
    { title: 'Properties', desc: 'computed and stored', content: 'Stored Properties, Computed Properties, get/set, didSet', code: 'struct Circle {\n  var radius: Double\n  var area: Double {\n    return .pi * radius * radius\n  }\n}', hint: 'Computed properties have no storage' },
    { title: 'Property Observers', desc: 'willSet and didSet', content: 'willSet, didSet, Property Changes', code: 'struct StepCounter {\n  var steps: Int = 0 {\n    didSet {\n      print("Added \\(steps - oldValue) steps")\n    }\n  }\n}', hint: 'Observers track property changes' },
    { title: 'Methods', desc: 'instance and type methods', content: 'Instance Methods, Type Methods (static), mutating', code: 'struct Counter {\n  var count = 0\n  mutating func increment() {\n    count += 1\n  }\n  static func description() {\n    print("A counter")\n  }\n}', hint: 'mutating needed for struct methods that modify' },
    { title: 'Inheritance', desc: 'subclassing', content: 'Superclass, Subclass, override, super', code: 'class Animal {\n  func makeSound() {\n    print("Some sound")\n  }\n}\nclass Dog: Animal {\n  override func makeSound() {\n    print("Bark")\n  }\n}', hint: 'Use override keyword' },
    { title: 'Initialization', desc: 'creating instances', content: 'Designated Initializers, Convenience Initializers, Required', code: 'class Person {\n  let name: String\n  var age: Int\n  init(name: String, age: Int) {\n    self.name = name\n    self.age = age\n  }\n}', hint: 'All properties must be initialized' },
    { title: 'Protocols', desc: 'defining interfaces', content: 'protocol, Conformance, Protocol Methods', code: 'protocol Drivable {\n  func drive()\n}\nclass Car: Drivable {\n  func drive() {\n    print("Driving")\n  }\n}', hint: 'Protocols define contracts' },
    { title: 'Extensions', desc: 'adding functionality', content: 'extension, Adding Methods, Computed Properties', code: 'extension Int {\n  var squared: Int {\n    return self * self\n  }\n}\nprint(5.squared)', hint: 'Extensions cannot add stored properties' },
    { title: 'Generics', desc: 'type-safe generic code', content: 'Generic Functions, Generic Types, Type Constraints', code: 'func swap<T>(_ a: inout T, _ b: inout T) {\n  let temp = a\n  a = b\n  b = temp\n}', hint: 'Generics avoid code duplication' },
    { title: 'Error Handling', desc: 'throws and catch', content: 'Error protocol, throw, do-catch, try', code: 'enum FileError: Error {\n  case notFound\n}\nfunc readFile() throws {\n  throw FileError.notFound\n}\ndo {\n  try readFile()\n} catch {\n  print(error)\n}', hint: 'Errors must conform to Error protocol' },
    { title: 'Optional Try', desc: 'try? and try!', content: 'try?, try!, Optional Result, Force Unwrap', code: 'let result = try? riskyOperation()\nif let data = result {\n  print(data)\n}', hint: 'try? returns nil on error' },
    { title: 'Guard Statements', desc: 'early exit', content: 'guard, else, Early Return, Unwrapping', code: 'func process(name: String?) {\n  guard let name = name else {\n    return\n  }\n  print(name)\n}', hint: 'guard ensures conditions are met' },
    { title: 'Type Casting', desc: 'is and as', content: 'is (type check), as? (conditional cast), as! (forced cast)', code: 'if let dog = animal as? Dog {\n  dog.bark()\n}', hint: 'as? returns optional' },
    { title: 'Nested Types', desc: 'types within types', content: 'Nested Enums, Nested Structs, Organization', code: 'struct Game {\n  enum Difficulty {\n    case easy, medium, hard\n  }\n  var difficulty: Difficulty\n}', hint: 'Nesting shows relationship' },
    { title: 'Access Control', desc: 'visibility modifiers', content: 'public, internal, fileprivate, private, open', code: 'public class User {\n  private var password: String\n  public init(password: String) {\n    self.password = password\n  }\n}', hint: 'private limits to declaration scope' },
    { title: 'Memory Management', desc: 'ARC and references', content: 'ARC, strong, weak, unowned, Reference Cycles', code: 'class Person {\n  weak var friend: Person?\n}', hint: 'weak prevents retain cycles' },
    { title: 'Codable', desc: 'JSON encoding/decoding', content: 'Codable, JSONEncoder, JSONDecoder, CodingKeys', code: 'struct User: Codable {\n  var name: String\n  var age: Int\n}\nlet json = try JSONEncoder().encode(user)\nlet decoded = try JSONDecoder().decode(User.self, from: json)', hint: 'Codable = Encodable + Decodable' },
    { title: 'Result Type', desc: 'success or failure', content: 'Result<Success, Failure>, .success, .failure', code: 'func fetchData() -> Result<String, Error> {\n  return .success("Data")\n}\nswitch fetchData() {\ncase .success(let data):\n  print(data)\ncase .failure(let error):\n  print(error)\n}', hint: 'Result replaces throw/catch pattern' },
    { title: 'Property Wrappers', desc: '@State, @Binding, custom', content: '@propertyWrapper, wrappedValue, Custom Wrappers', code: '@propertyWrapper\nstruct Capitalized {\n  private var value: String\n  var wrappedValue: String {\n    get { value }\n    set { value = newValue.capitalized }\n  }\n}', hint: 'Property wrappers add behavior' },
    { title: 'Combine Basics', desc: 'reactive programming', content: 'Publisher, Subscriber, sink(), Operators', code: 'import Combine\nlet publisher = Just("Hello")\npublisher.sink { value in\n  print(value)\n}', hint: 'Combine handles asynchronous events' },
    { title: 'URLSession', desc: 'network requests', content: 'URLSession, dataTask, Completion Handlers', code: 'let url = URL(string: "https://api.example.com")!\nURLSession.shared.dataTask(with: url) { data, response, error in\n  // Handle response\n}.resume()', hint: 'Call resume() to start task' },
    { title: 'Async/Await', desc: 'modern concurrency', content: 'async, await, Task, Async Sequences', code: 'func fetchData() async throws -> String {\n  let url = URL(string: "https://api.example.com")!\n  let (data, _) = try await URLSession.shared.data(from: url)\n  return String(data: data, encoding: .utf8)!\n}', hint: 'await suspends function execution' },
    { title: 'Actors', desc: 'thread-safe types', content: 'actor, Isolation, await, Main Actor', code: 'actor Counter {\n  var count = 0\n  func increment() {\n    count += 1\n  }\n}\nlet counter = Counter()\nawait counter.increment()', hint: 'Actors protect mutable state' },
    { title: 'TaskGroup', desc: 'parallel tasks', content: 'withTaskGroup, addTask, Structured Concurrency', code: 'await withTaskGroup(of: Int.self) { group in\n  for i in 1...5 {\n    group.addTask {\n      return i * 2\n    }\n  }\n}', hint: 'TaskGroup runs tasks concurrently' },
    { title: 'UIKit Basics', desc: 'iOS UI foundation', content: 'UIViewController, UIView, IBOutlet, IBAction', code: 'class ViewController: UIViewController {\n  override func viewDidLoad() {\n    super.viewDidLoad()\n    view.backgroundColor = .white\n  }\n}', hint: 'viewDidLoad called after view loads' },
    
    // Advanced (45-59)
    { title: 'Auto Layout', desc: 'constraints', content: 'NSLayoutConstraint, Anchors, translatesAutoresizingMaskIntoConstraints', code: 'label.translatesAutoresizingMaskIntoConstraints = false\nNSLayoutConstraint.activate([\n  label.centerXAnchor.constraint(equalTo: view.centerXAnchor),\n  label.centerYAnchor.constraint(equalTo: view.centerYAnchor)\n])', hint: 'Set translates to false first' },
    { title: 'Table Views', desc: 'scrolling lists', content: 'UITableView, UITableViewDataSource, UITableViewDelegate, Cells', code: 'func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {\n  return items.count\n}\nfunc tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {\n  let cell = tableView.dequeueReusableCell(withIdentifier: "Cell", for: indexPath)\n  return cell\n}', hint: 'Reuse cells for performance' },
    { title: 'Collection Views', desc: 'grid layouts', content: 'UICollectionView, UICollectionViewLayout, Cells', code: 'let layout = UICollectionViewFlowLayout()\nlayout.itemSize = CGSize(width: 100, height: 100)\nlet collectionView = UICollectionView(frame: .zero, collectionViewLayout: layout)', hint: 'More flexible than TableView' },
    { title: 'Navigation', desc: 'view controller transitions', content: 'UINavigationController, pushViewController, popViewController', code: 'let detailVC = DetailViewController()\nnavigationController?.pushViewController(detailVC, animated: true)', hint: 'Navigation uses stack' },
    { title: 'Delegation', desc: 'design pattern', content: 'Protocol Delegates, weak var, Callback Pattern', code: 'protocol DataDelegate: AnyObject {\n  func didReceiveData(_ data: String)\n}\nclass DataSource {\n  weak var delegate: DataDelegate?\n}', hint: 'Use weak to avoid retain cycles' },
    { title: 'SwiftUI Basics', desc: 'declarative UI', content: 'View protocol, body, @State, VStack', code: 'struct ContentView: View {\n  var body: some View {\n    VStack {\n      Text("Hello, SwiftUI!")\n      Button("Tap") { }\n    }\n  }\n}', hint: 'SwiftUI is declarative' },
    { title: 'SwiftUI State', desc: 'reactive data', content: '@State, @Binding, @ObservedObject, @Published', code: 'struct CounterView: View {\n  @State private var count = 0\n  var body: some View {\n    Button("Count: \\(count)") {\n      count += 1\n    }\n  }\n}', hint: '@State for view-local data' },
    { title: 'SwiftUI Lists', desc: 'scrolling content', content: 'List, ForEach, Identifiable, Section', code: 'struct Item: Identifiable {\n  let id = UUID()\n  let name: String\n}\nList(items) { item in\n  Text(item.name)\n}', hint: 'Items must be Identifiable' },
    { title: 'SwiftUI Navigation', desc: 'NavigationView', content: 'NavigationView, NavigationLink, navigationTitle', code: 'NavigationView {\n  List(items) { item in\n    NavigationLink(destination: DetailView(item: item)) {\n      Text(item.name)\n    }\n  }\n  .navigationTitle("Items")\n}', hint: 'NavigationView wraps content' },
    { title: 'SwiftUI Forms', desc: 'user input', content: 'Form, TextField, Toggle, Picker', code: 'Form {\n  TextField("Name", text: $name)\n  Toggle("Enabled", isOn: $isEnabled)\n  Picker("Color", selection: $selectedColor) {\n    ForEach(colors, id: \\.self) { color in\n      Text(color)\n    }\n  }\n}', hint: 'Use $ for bindings' },
    { title: 'ObservableObject', desc: 'shared state', content: '@ObservedObject, @Published, class, objectWillChange', code: 'class UserSettings: ObservableObject {\n  @Published var username = ""\n  @Published var isLoggedIn = false\n}\nstruct SettingsView: View {\n  @ObservedObject var settings: UserSettings\n}', hint: '@Published triggers UI updates' },
    { title: 'EnvironmentObject', desc: 'dependency injection', content: '@EnvironmentObject, .environmentObject(), Shared Data', code: 'struct ParentView: View {\n  @StateObject var settings = UserSettings()\n  var body: some View {\n    ChildView()\n      .environmentObject(settings)\n  }\n}\nstruct ChildView: View {\n  @EnvironmentObject var settings: UserSettings\n}', hint: 'Environment passes data down tree' },
    { title: 'Animations', desc: 'SwiftUI transitions', content: 'withAnimation, .animation(), .transition(), Spring', code: '@State var isExpanded = false\nvar body: some View {\n  Button("Toggle") {\n    withAnimation(.spring()) {\n      isExpanded.toggle()\n    }\n  }\n}', hint: 'Animations are automatic with state changes' },
    { title: 'Gestures', desc: 'touch interactions', content: 'TapGesture, DragGesture, LongPressGesture, onEnded', code: 'Circle()\n  .gesture(\n    DragGesture()\n      .onEnded { value in\n        print(value.translation)\n      }\n  )', hint: 'Combine gestures with simultaneousGesture' },
    { title: 'Core Data', desc: 'local persistence', content: 'NSManagedObject, NSFetchRequest, Context, @FetchRequest', code: '@Environment(\\.managedObjectContext) var context\n@FetchRequest(sortDescriptors: []) var items: FetchedResults<Item>\nButton("Add") {\n  let item = Item(context: context)\n  try? context.save()\n}', hint: 'Core Data is Apples ORM' },
    { title: 'Unit Testing', desc: 'XCTest framework', content: 'XCTestCase, XCTAssert, setUp(), tearDown()', code: 'class CalculatorTests: XCTestCase {\n  func testAddition() {\n    let calc = Calculator()\n    XCTAssertEqual(calc.add(2, 3), 5)\n  }\n}', hint: 'Test methods start with test' }
  ]
  
  const topic = topics[i] || topics[topics.length - 1]
  
  return {
    id: `swift-${i + 1}`,
    title: topic.title,
    description: `Learn ${topic.desc}`,
    content: `# ${topic.title}\n\n${topic.content}\n\n## Example:\n\`\`\`swift\nimport Foundation\n\n${topic.code}\n\`\`\``,
    language: 'swift' as const,
    difficulty,
    estimatedTime: 25 + i,
    initialCode: `import Foundation\n\n// Your Swift code here\n`,
    solution: `import Foundation\n\n${topic.code}`,
    expectedOutput: 'Output',
    hints: [topic.hint, 'Swift is safe and modern', 'Test your code thoroughly'],
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.includes('import'),
        errorMessage: 'Your code should include import statements'
      }
    ]
  }
})
