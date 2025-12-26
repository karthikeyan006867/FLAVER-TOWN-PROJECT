import { Lesson } from '../courses'

export const perlLessons: Lesson[] = [
  {
    id: 'perl-1',
    title: 'Introduction to Perl',
    description: 'Learn Perl for text processing and system administration',
    content: `# Introduction to Perl

Perl is a high-level, general-purpose programming language known for its text processing capabilities.

## Key Features:
- Excellent text processing
- Regular expressions built-in
- CPAN (vast module repository)
- Flexible syntax
- Cross-platform

## Hello World:
\`\`\`perl
print "Hello, Perl!\\n";
\`\`\`

## Variables:
\`\`\`perl
my $scalar = "Hello";    # Scalar (single value)
my @array = (1, 2, 3);   # Array
my %hash = (             # Hash (key-value pairs)
  name => "Perl",
  age => 37
);
\`\`\``,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 35,
    initialCode: `#!/usr/bin/perl
use strict;
use warnings;

# Your Perl code
print "Hello, Perl!\\n";
`,
    solution: `#!/usr/bin/perl
use strict;
use warnings;

# Scalars
my $name = "Perl";
my $version = 5.38;
print "Learning $name version $version\\n";

# Arrays
my @numbers = (1, 2, 3, 4, 5);
print "First: $numbers[0]\\n";

# Hash
my %person = (
  name => "Alice",
  age => 30,
  city => "Boston"
);
print "Name: $person{name}\\n";`,
    hints: ['$ for scalars', '@ for arrays', '% for hashes']
  }
]
