def merge_two_lists(l1, l2)
    if !l1 && !l2
        return []
    end
    current_node = return_node = ListNode.new()
    
    while l1 && l2
        if l1.val < l2.val
            current_node.val = l1.val
            l1 = l1.next
        else
            current_node.val = l2.val
            l2 = l2.next
        end
        current_node.next = ListNode.new()
        current_node = current_node.next
    end
    if l1
        while l1
            current_node.val = l1.val
            if l1.next
                current_node.next = ListNode.new()
                current_node = current_node.next
            end
            l1 = l1.next
        end
    end
    if l2
        while l2
            current_node.val = l2.val
            if l2.next
                current_node.next = ListNode.new()
                current_node = current_node.next
            end
            l2 = l2.next
        end
    end
    
    return return_node
end