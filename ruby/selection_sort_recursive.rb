def selection_sort_recursive(arr)
  # type your code in here
  return arr if arr.length <= 1

  min = arr.min

  index = arr.index(min)

  arr.delete_at(index)

  selection_sort_recursive(arr)

  arr.unshift(min)

  arr

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort_recursive([3, -1, 5, 2])

  puts "Expecting: [-12, 4, 78, 209]"
  print "=> "
  print selection_sort_recursive([78, 209, -12, 4])

  puts "Expecting: [-86, 7, 22, 147]"
  print "=> "
  print selection_sort_recursive([22, 147, -86, 7])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
