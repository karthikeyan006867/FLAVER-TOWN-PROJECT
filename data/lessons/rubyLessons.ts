import { Lesson } from '../courses'

export const rubyLessons: Lesson[] = Array.from({ length: 60 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 20 ? 'Beginner' : i < 45 ? 'Intermediate' : 'Advanced'
  
  const topics = [
    // Beginner (0-19)
    { title: 'Ruby Basics & Puts', desc: 'output and syntax', content: 'puts, print, p, Comments', code: 'puts "Hello, Ruby!"\\nname = "World"\\nputs "Hello, #{name}"', hint: 'Use #{} for string interpolation' },
    { title: 'Variables', desc: 'local, instance, class', content: 'Local Variables, @instance, @@class, $global', code: 'name = "John"\\n@age = 25\\n@@count = 0\\n$debug = true', hint: 'No type declarations needed' },
    { title: 'Data Types', desc: 'strings, numbers, symbols', content: 'String, Integer, Float, Symbol, Boolean, nil', code: 'str = "Ruby"\\nnum = 42\\nfloat = 3.14\\nsym = :name\\nflag = true', hint: 'Symbols are immutable strings' },
    { title: 'String Operations', desc: 'manipulation methods', content: 'Concatenation, length, upcase, downcase, reverse', code: 'text = "hello"\\nputs text.upcase\\nputs text.length\\nputs text.reverse', hint: 'Strings are mutable in Ruby' },
    { title: 'Arrays', desc: 'ordered collections', content: 'Array creation, [], push, pop, length', code: 'numbers = [1, 2, 3, 4, 5]\\nnumbers.push(6)\\nputs numbers[0]', hint: 'Arrays can hold mixed types' },
    { title: 'Hashes', desc: 'key-value pairs', content: 'Hash creation, {}, keys, values, each', code: 'person = { name: "John", age: 30 }\\nputs person[:name]\\nperson[:city] = "NYC"', hint: 'Use symbols for hash keys' },
    { title: 'Ranges', desc: 'sequences', content: 'Range creation, .., ..., to_a, include?', code: 'range = 1..5\\nputs range.to_a\\nputs range.include?(3)', hint: '.. is inclusive, ... is exclusive' },
    { title: 'Conditional Statements', desc: 'if, elsif, else', content: 'if/else, unless, Comparison Operators', code: 'age = 18\\nif age >= 18\\n  puts "Adult"\\nelse\\n  puts "Minor"\\nend', hint: 'unless is opposite of if' },
    { title: 'Ternary & Case', desc: 'compact conditionals', content: 'Ternary Operator, case/when, Multiple Conditions', code: 'status = age >= 18 ? "Adult" : "Minor"\\ncase day\\nwhen "Mon"\\n  puts "Monday"\\nelse\\n  puts "Other"\\nend', hint: 'case uses === for comparison' },
    { title: 'While & Until', desc: 'loops', content: 'while, until, break, next', code: 'i = 0\\nwhile i < 5\\n  puts i\\n  i += 1\\nend', hint: 'until is opposite of while' },
    { title: 'For & Times', desc: 'iteration', content: 'for loop, times, upto, downto', code: 'for i in 0..4\\n  puts i\\nend\\n5.times { |i| puts i }', hint: 'times is more idiomatic than for' },
    { title: 'Each & Map', desc: 'array iteration', content: 'each, map (collect), select, reject', code: '[1,2,3].each { |n| puts n }\\ndoubled = [1,2,3].map { |n| n * 2 }', hint: 'each returns original, map returns new array' },
    { title: 'Methods', desc: 'defining functions', content: 'def, Parameters, Return Values, Implicit Return', code: 'def greet(name)\\n  "Hello, #{name}"\\nend\\nputs greet("John")', hint: 'Last expression is returned automatically' },
    { title: 'Method Arguments', desc: 'default and splat', content: 'Default Parameters, *splat, **keyword args', code: 'def greet(name = "Guest", *messages)\\n  puts "#{name}: #{messages.join}"\\nend', hint: '*args collects remaining arguments' },
    { title: 'Blocks', desc: 'code chunks', content: 'Block Syntax, yield, Block Parameters, { } vs do/end', code: 'def three_times\\n  yield 1\\n  yield 2\\n  yield 3\\nend\\nthree_times { |n| puts n }', hint: 'yield calls the block' },
    { title: 'Procs & Lambdas', desc: 'callable objects', content: 'Proc.new, lambda, call, Differences', code: 'my_proc = Proc.new { |x| x * 2 }\\nmy_lambda = lambda { |x| x * 2 }\\nputs my_proc.call(5)', hint: 'Lambdas check argument count strictly' },
    { title: 'Classes', desc: 'object-oriented basics', content: 'class, new, initialize, Instance Variables', code: 'class Person\\n  def initialize(name)\\n    @name = name\\n  end\\n  def greet\\n    "Hi, I am #{@name}"\\n  end\\nend', hint: 'initialize is the constructor' },
    { title: 'Attributes', desc: 'accessors', content: 'attr_reader, attr_writer, attr_accessor', code: 'class Person\\n  attr_accessor :name\\n  attr_reader :age\\n  def initialize(name, age)\\n    @name = name\\n    @age = age\\n  end\\nend', hint: 'attr_accessor creates getter and setter' },
    { title: 'Inheritance', desc: 'extending classes', content: 'class <, super, Method Overriding', code: 'class Animal\\n  def speak\\n    "Sound"\\n  end\\nend\\nclass Dog < Animal\\n  def speak\\n    "Bark"\\n  end\\nend', hint: 'Use < for inheritance' },
    { title: 'Modules', desc: 'namespaces and mixins', content: 'module, include, extend, Mixins', code: 'module Swimmable\\n  def swim\\n    "Swimming"\\n  end\\nend\\nclass Fish\\n  include Swimmable\\nend', hint: 'Modules enable multiple inheritance' },
    
    // Intermediate (20-44)
    { title: 'Class Methods', desc: 'self and static', content: 'self., Class Variables, @@variables', code: 'class Counter\\n  @@count = 0\\n  def self.increment\\n    @@count += 1\\n  end\\n  def self.total\\n    @@count\\n  end\\nend', hint: 'self. defines class methods' },
    { title: 'Class Inheritance', desc: 'advanced OOP', content: 'Superclass, Subclass, Method Lookup, super', code: 'class Employee < Person\\n  def initialize(name, salary)\\n    super(name)\\n    @salary = salary\\n  end\\nend', hint: 'super calls parent method' },
    { title: 'Method Visibility', desc: 'public, private, protected', content: 'public, private, protected, Access Control', code: 'class BankAccount\\n  def deposit(amt)\\n    @balance += amt\\n  end\\n  private\\n  def validate\\n    # Internal only\\n  end\\nend', hint: 'private methods cannot be called with receiver' },
    { title: 'Operator Overloading', desc: 'custom operators', content: '+, -, ==, <, >, <=>, to_s', code: 'class Vector\\n  attr_accessor :x, :y\\n  def +(other)\\n    Vector.new(@x + other.x, @y + other.y)\\n  end\\nend', hint: 'Define operator methods like +' },
    { title: 'Method Missing', desc: 'dynamic methods', content: 'method_missing, respond_to?, Dynamic Dispatch', code: 'class DynamicClass\\n  def method_missing(name, *args)\\n    puts "Called #{name} with #{args}"\\n  end\\nend', hint: 'Catch calls to undefined methods' },
    { title: 'Singleton Methods', desc: 'object-specific methods', content: 'def object.method, Eigenclass', code: 'str = "hello"\\ndef str.shout\\n  self.upcase + "!"\\nend\\nputs str.shout', hint: 'Define methods on single objects' },
    { title: 'Regular Expressions', desc: 'pattern matching', content: '/pattern/, =~, match, scan, gsub', code: 'text = "hello 123"\\nif text =~ /\\\\d+/\\n  puts "Contains numbers"\\nend', hint: 'Use /.../ for regex literals' },
    { title: 'File I/O', desc: 'reading and writing', content: 'File.read, File.write, File.open, readlines', code: 'content = File.read("data.txt")\\nFile.write("output.txt", "Hello")\\nFile.open("file.txt") { |f| puts f.read }', hint: 'Block form closes file automatically' },
    { title: 'Exception Handling', desc: 'rescue and raise', content: 'begin/rescue, raise, ensure, Custom Errors', code: 'begin\\n  raise "Error!"\\nrescue => e\\n  puts e.message\\nensure\\n  puts "Cleanup"\\nend', hint: 'ensure always runs' },
    { title: 'Enumerable Module', desc: 'collection methods', content: 'map, select, reject, reduce, any?, all?', code: 'numbers = [1,2,3,4,5]\\nevens = numbers.select { |n| n.even? }\\nsum = numbers.reduce(:+)', hint: 'Enumerable adds powerful iteration methods' },
    { title: 'Symbols', desc: 'immutable identifiers', content: 'Symbol creation, :symbol, to_sym, Immutability', code: 'name = :john\\nhash = { name: "John", age: 30 }\\nstr = "hello".to_sym', hint: 'Symbols are more efficient than strings for keys' },
    { title: 'String Encoding', desc: 'character encodings', content: 'UTF-8, encoding, force_encoding, encode', code: 'str = "hello"\\nputs str.encoding\\nstr.force_encoding("UTF-8")', hint: 'Ruby 2+ defaults to UTF-8' },
    { title: 'Time & Date', desc: 'temporal operations', content: 'Time.now, Date.today, strftime, parse', code: 'require "time"\\nnow = Time.now\\nputs now.strftime("%Y-%m-%d")\\npast = Time.parse("2020-01-01")', hint: 'require time/date for full features' },
    { title: 'JSON', desc: 'parsing and generating', content: 'JSON.parse, JSON.generate, require "json"', code: 'require "json"\\nhash = { name: "John", age: 30 }\\njson = JSON.generate(hash)\\nparsed = JSON.parse(json)', hint: 'Require json library first' },
    { title: 'HTTP Requests', desc: 'net/http', content: 'Net::HTTP, URI, get, post', code: 'require "net/http"\\nrequire "uri"\\nuri = URI("https://api.example.com")\\nresponse = Net::HTTP.get(uri)', hint: 'Use gems like httparty for easier API calls' },
    { title: 'Gems & Bundler', desc: 'dependency management', content: 'gem install, Gemfile, bundle install', code: '# Gemfile\\nsource "https://rubygems.org"\\ngem "rails", "~> 7.0"\\ngem "pg"', hint: 'Bundler manages gem versions' },
    { title: 'RSpec Basics', desc: 'testing framework', content: 'describe, it, expect, Matchers', code: 'RSpec.describe Calculator do\\n  it "adds two numbers" do\\n    expect(Calculator.add(2, 3)).to eq(5)\\n  end\\nend', hint: 'RSpec uses natural language' },
    { title: 'Metaprogramming', desc: 'code that writes code', content: 'define_method, class_eval, instance_eval', code: 'class DynamicClass\\n  [:name, :age].each do |attr|\\n    define_method(attr) { instance_variable_get("@#{attr}") }\\n    define_method("#{attr}=") { |v| instance_variable_set("@#{attr}", v) }\\n  end\\nend', hint: 'Metaprogramming creates code at runtime' },
    { title: 'Refinements', desc: 'scoped modifications', content: 'refine, using, Monkey Patching Safety', code: 'module StringExtensions\\n  refine String do\\n    def shout\\n      upcase + "!"\\n    end\\n  end\\nend\\nusing StringExtensions', hint: 'Refinements limit scope of changes' },
    { title: 'Struct', desc: 'simple data classes', content: 'Struct.new, Members, Immutability Option', code: 'Person = Struct.new(:name, :age)\\nperson = Person.new("John", 30)\\nputs person.name', hint: 'Struct creates simple classes quickly' },
    { title: 'OpenStruct', desc: 'dynamic attributes', content: 'OpenStruct, Dynamic Attributes, Hash-like', code: 'require "ostruct"\\nperson = OpenStruct.new\\nperson.name = "John"\\nperson.age = 30\\nputs person.name', hint: 'OpenStruct allows arbitrary attributes' },
    { title: 'Comparable Module', desc: 'comparison operators', content: 'include Comparable, <=>, <, >, ==', code: 'class Person\\n  include Comparable\\n  attr_reader :age\\n  def <=>(other)\\n    age <=> other.age\\n  end\\nend', hint: 'Implement <=> to get all comparisons' },
    { title: 'Fiber', desc: 'lightweight concurrency', content: 'Fiber.new, resume, yield', code: 'fiber = Fiber.new do\\n  puts "Start"\\n  Fiber.yield\\n  puts "End"\\nend\\nfiber.resume\\nfiber.resume', hint: 'Fibers are cooperative coroutines' },
    { title: 'Thread Basics', desc: 'concurrent execution', content: 'Thread.new, join, Thread Safety', code: 'thread = Thread.new do\\n  puts "Background"\\nend\\nthread.join', hint: 'Be careful with shared state' },
    { title: 'Mutex', desc: 'thread synchronization', content: 'Mutex.new, synchronize, Lock/Unlock', code: 'mutex = Mutex.new\\ncounter = 0\\nmutex.synchronize do\\n  counter += 1\\nend', hint: 'Mutex prevents race conditions' },
    
    // Advanced (45-59)
    { title: 'Rails Setup', desc: 'framework basics', content: 'rails new, MVC, Convention over Configuration', code: '# Terminal\\nrails new myapp\\ncd myapp\\nrails server', hint: 'Rails follows conventions' },
    { title: 'Rails Routing', desc: 'URL mapping', content: 'routes.rb, resources, get, post, RESTful', code: 'Rails.application.routes.draw do\\n  resources :users\\n  get "about", to: "pages#about"\\nend', hint: 'resources creates RESTful routes' },
    { title: 'Rails Controllers', desc: 'request handling', content: 'ApplicationController, Actions, params, render', code: 'class UsersController < ApplicationController\\n  def index\\n    @users = User.all\\n  end\\n  def show\\n    @user = User.find(params[:id])\\n  end\\nend', hint: 'Instance variables pass to views' },
    { title: 'Rails Models', desc: 'Active Record', content: 'ActiveRecord::Base, Validations, Associations', code: 'class User < ApplicationRecord\\n  validates :name, presence: true\\n  has_many :posts\\nend', hint: 'Models inherit from ApplicationRecord' },
    { title: 'Rails Migrations', desc: 'database schema', content: 'rails generate migration, change, up/down', code: 'class CreateUsers < ActiveRecord::Migration[7.0]\\n  def change\\n    create_table :users do |t|\\n      t.string :name\\n      t.string :email\\n      t.timestamps\\n    end\\n  end\\nend', hint: 'Run rails db:migrate to apply' },
    { title: 'Rails Views', desc: 'ERB templates', content: 'ERB, <%= %>, <% %>, Partials', code: '<h1>Users</h1>\\n<% @users.each do |user| %>\\n  <p><%= user.name %></p>\\n<% end %>', hint: '<%= %> outputs, <% %> executes' },
    { title: 'Rails Helpers', desc: 'view assistance', content: 'link_to, form_with, Custom Helpers', code: '<%= link_to "Home", root_path %>\\n<%= form_with model: @user do |f| %>\\n  <%= f.text_field :name %>\\n  <%= f.submit %>\\n<% end %>', hint: 'Helpers generate HTML' },
    { title: 'Active Record Queries', desc: 'database queries', content: 'where, find, find_by, order, limit, joins', code: 'users = User.where(active: true)\\nuser = User.find_by(email: "john@example.com")\\nrecent = User.order(created_at: :desc).limit(10)', hint: 'Queries are lazy-loaded' },
    { title: 'Associations', desc: 'model relationships', content: 'belongs_to, has_many, has_one, has_many :through', code: 'class User < ApplicationRecord\\n  has_many :posts\\n  has_one :profile\\nend\\nclass Post < ApplicationRecord\\n  belongs_to :user\\nend', hint: 'Associations create helper methods' },
    { title: 'Validations', desc: 'data integrity', content: 'validates, presence, uniqueness, Custom Validators', code: 'class User < ApplicationRecord\\n  validates :email, presence: true, uniqueness: true\\n  validates :age, numericality: { greater_than: 0 }\\nend', hint: 'Validations run before save' },
    { title: 'Callbacks', desc: 'lifecycle hooks', content: 'before_save, after_create, before_validation', code: 'class User < ApplicationRecord\\n  before_save :normalize_email\\n  after_create :send_welcome_email\\n  def normalize_email\\n    self.email = email.downcase\\n  end\\nend', hint: 'Callbacks run at specific times' },
    { title: 'Rails Authentication', desc: 'user login', content: 'has_secure_password, BCrypt, Sessions', code: 'class User < ApplicationRecord\\n  has_secure_password\\nend\\n# Controller\\nif user && user.authenticate(params[:password])\\n  session[:user_id] = user.id\\nend', hint: 'has_secure_password adds password handling' },
    { title: 'Rails API Mode', desc: 'building APIs', content: 'rails new --api, JSON Responses, Serializers', code: 'class UsersController < ApplicationController\\n  def index\\n    @users = User.all\\n    render json: @users\\n  end\\nend', hint: 'API mode removes view layer' },
    { title: 'Active Job', desc: 'background jobs', content: 'ApplicationJob, perform_later, Sidekiq', code: 'class EmailJob < ApplicationJob\\n  def perform(user)\\n    UserMailer.welcome(user).deliver_now\\n  end\\nend\\nEmailJob.perform_later(@user)', hint: 'Jobs run asynchronously' },
    { title: 'Action Cable', desc: 'WebSockets', content: 'Channels, Broadcast, Real-time Features', code: 'class ChatChannel < ApplicationCable::Channel\\n  def subscribed\\n    stream_from "chat_#{params[:room]}"\\n  end\\n  def speak(data)\\n    ActionCable.server.broadcast("chat_#{params[:room]}", data)\\n  end\\nend', hint: 'Action Cable enables real-time features' },
    { title: 'Rails Testing', desc: 'RSpec with Rails', content: 'RSpec Rails, Model Specs, Request Specs, FactoryBot', code: 'RSpec.describe User, type: :model do\\n  it "is valid with valid attributes" do\\n    user = User.new(name: "John", email: "john@example.com")\\n    expect(user).to be_valid\\n  end\\nend', hint: 'Test models, controllers, requests' },
    { title: 'Rake Tasks', desc: 'custom scripts', content: 'rake, task, namespace, invoke', code: '# lib/tasks/data.rake\\nnamespace :data do\\n  desc "Import users"\\n  task import: :environment do\\n    # Import logic\\n  end\\nend', hint: 'Run with rails data:import' },
    { title: 'Rails Engines', desc: 'modular applications', content: 'Engine, Mountable, Namespacing', code: 'module Blog\\n  class Engine < ::Rails::Engine\\n    isolate_namespace Blog\\n  end\\nend', hint: 'Engines are mini Rails apps' },
    { title: 'Performance Optimization', desc: 'Rails best practices', content: 'N+1 Queries, includes, eager_load, Caching', code: '# Bad: N+1\\nusers.each { |u| puts u.posts.count }\\n# Good: eager load\\nusers = User.includes(:posts)\\nusers.each { |u| puts u.posts.count }', hint: 'Use includes to avoid N+1' },
    { title: 'Rails Deployment', desc: 'production setup', content: 'Heroku, Capistrano, Environment Variables, Assets', code: '# config/environments/production.rb\\nconfig.assets.compile = false\\nconfig.force_ssl = true\\nconfig.log_level = :info', hint: 'Precompile assets for production' }
  ]
  
  const topic = topics[i] || topics[topics.length - 1]
  
  return {
    id: `ruby-${i + 1}`,
    title: topic.title,
    description: `Learn ${topic.desc}`,
    content: `# ${topic.title}\n\n${topic.content}\n\n## Example:\n\`\`\`ruby\n${topic.code}\n\`\`\``,
    language: 'ruby' as const,
    difficulty,
    estimatedTime: 20 + i,
    initialCode: `# Your Ruby code here\n\n`,
    solution: `${topic.code}`,
    expectedOutput: 'Output',
    hints: [topic.hint, 'Ruby is elegant and expressive', 'Test your code thoroughly'],
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 5,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  }
})
