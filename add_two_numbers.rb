def add_two_numbers(l1, l2)
    current_node = return_node = ListNode.new()
    carry = 0
    
    while !!l1 || !!l2 || carry > 0
        running_total = 0
        sum = 0
        value_1 = !!l1 ? l1.val : 0
        value_2 = !!l2 ? l2.val : 0
        running_total = value_1 + value_2 + carry
        
        if running_total >= 10
            carry = 1
            sum = running_total % 10
        else
            carry = 0
            sum = running_total
        end
        
        current_node.val = sum

        if l1 && l1.next || l2 && l2.next || carry > 0
            current_node.next = ListNode.new()
            current_node = current_node.next
        end
        !!l1 ? l1 = l1.next : nil
        !!l2 ? l2 = l2.next : nil  
    end
    
    return return_node
end