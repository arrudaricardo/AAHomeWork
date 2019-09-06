# Exercise 1 - Stack
class Stack
  def initialize(arr)
    @stack = arr
    # create ivar to store stack here!

  end

  def push(el)
    @stack.push(el)
    # adds an element to the stack
  end

  def pop
    @stack.pop
    # removes one element from the stack
  end

  def peek
    @stack.last
    # returns, but doesn't remove, the top element in the stack
  end
end

# Exercise 2 - Queue

class Queue
  def initialize(arr)
    @store = arr
  end

  def enqueue(el)
    @store.push(el)
  end

  def dequeue
    @store.shift
  end

  def peek
    @store.first
  end

end

# Exercise 3 - Map
class Map

  def initialize
    @store = Array.new{ [] }
  end

  def set(key, value)
    @store.each_with_index do |map, index|
      map_key, map_value = map

      if map_key == key
        @store[index][1] = value
        return true
      end
    end
    @store.push([key, value])
    true

  end

  def get(key)
    raise "No key" unless @store.any? { |arr| arr[0] == key }

    @store.each do |arr|
      map_key, value = arr
      if key == map_key
        return value
      end
    end

  end

  def delete(key)
    raise "No key" unless @store.any? { |arr| arr[0] == key }

    @store.each_with_index do |map|
      if key == map[0] 
        @store.delete_at(index)
        return true
      end
    end
    false
  end

  def show
    @store.each do |map|
      puts "#{map[0]} => #{map[1]}"
    end
  end
  true

end


