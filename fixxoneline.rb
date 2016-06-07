# (0..99).map {|i| srand(46308667) if (i%15).zero?; ["FizzBuzz", "Buzz", i+1, "Fizz"][rand(4)]; rand(4)}


desiredArr = [2, 2, 3, 2, 1, 3, 2, 2, 3, 1, 2, 3, 2, 2, 0]

x = 1
arr = []

while arr != desiredArr
  srand(x)
  arr = []
  15.times {arr << rand(4)}
  x += 1
end

p x
