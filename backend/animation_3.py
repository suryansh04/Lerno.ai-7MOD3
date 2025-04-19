# To run this animation, use the following command:
# manim -pql <filename>.py Scene3
# or for higher quality:
# manim -pqh <filename>.py Scene3
from manim import *

class Scene3(Scene):
    def construct(self):
        # Title
        title = Text("Singly vs Doubly Linked Lists", font_size=30).to_edge(UP, buff=0.5)
        
        # Create singly linked list
        singly_label = Text("Singly Linked List", font_size=24).shift(UP * 2)
        
        # Nodes for singly linked list
        node1_s = Circle(radius=0.3, color=WHITE).shift(UP * 1 + LEFT * 4)
        node2_s = Circle(radius=0.3, color=WHITE).shift(UP * 1 + LEFT * 2)
        node3_s = Circle(radius=0.3, color=WHITE).shift(UP * 1)
        node4_s = Circle(radius=0.3, color=WHITE).shift(UP * 1 + RIGHT * 2)
        node5_s = Circle(radius=0.3, color=WHITE).shift(UP * 1 + RIGHT * 4)
        
        # Arrows for singly linked list
        arrow1_s = Arrow(start=node1_s.get_right(), end=node2_s.get_left(), buff=0.1, color=YELLOW)
        arrow2_s = Arrow(start=node2_s.get_right(), end=node3_s.get_left(), buff=0.1, color=YELLOW)
        arrow3_s = Arrow(start=node3_s.get_right(), end=node4_s.get_left(), buff=0.1, color=YELLOW)
        arrow4_s = Arrow(start=node4_s.get_right(), end=node5_s.get_left(), buff=0.1, color=YELLOW)
        
        # Create doubly linked list
        doubly_label = Text("Doubly Linked List", font_size=24).shift(DOWN * 1)
        
        # Nodes for doubly linked list
        node1_d = Circle(radius=0.3, color=WHITE).shift(DOWN * 2 + LEFT * 4)
        node2_d = Circle(radius=0.3, color=WHITE).shift(DOWN * 2 + LEFT * 2)
        node3_d = Circle(radius=0.3, color=WHITE).shift(DOWN * 2)
        node4_d = Circle(radius=0.3, color=WHITE).shift(DOWN * 2 + RIGHT * 2)
        node5_d = Circle(radius=0.3, color=WHITE).shift(DOWN * 2 + RIGHT * 4)
        
        # Forward arrows for doubly linked list
        arrow1_d_f = Arrow(start=node1_d.get_right(), end=node2_d.get_left(), buff=0.1, color=YELLOW)
        arrow2_d_f = Arrow(start=node2_d.get_right(), end=node3_d.get_left(), buff=0.1, color=YELLOW)
        arrow3_d_f = Arrow(start=node3_d.get_right(), end=node4_d.get_left(), buff=0.1, color=YELLOW)
        arrow4_d_f = Arrow(start=node4_d.get_right(), end=node5_d.get_left(), buff=0.1, color=YELLOW)
        
        # Backward arrows for doubly linked list
        arrow1_d_b = Arrow(start=node2_d.get_left(), end=node1_d.get_right(), buff=0.1, color=BLUE)
        arrow2_d_b = Arrow(start=node3_d.get_left(), end=node2_d.get_right(), buff=0.1, color=BLUE)
        arrow3_d_b = Arrow(start=node4_d.get_left(), end=node3_d.get_right(), buff=0.1, color=BLUE)
        arrow4_d_b = Arrow(start=node5_d.get_left(), end=node4_d.get_right(), buff=0.1, color=BLUE)
        
        # Animation sequence
        self.play(Write(title))
        self.play(Write(singly_label), Write(doubly_label))
        
        # Create singly linked list
        self.play(
            Create(node1_s), Create(node2_s), Create(node3_s), Create(node4_s), Create(node5_s),
            GrowArrow(arrow1_s), GrowArrow(arrow2_s), GrowArrow(arrow3_s), GrowArrow(arrow4_s)
        )
        
        # Create doubly linked list
        self.play(
            Create(node1_d), Create(node2_d), Create(node3_d), Create(node4_d), Create(node5_d),
            GrowArrow(arrow1_d_f), GrowArrow(arrow2_d_f), GrowArrow(arrow3_d_f), GrowArrow(arrow4_d_f),
            GrowArrow(arrow1_d_b), GrowArrow(arrow2_d_b), GrowArrow(arrow3_d_b), GrowArrow(arrow4_d_b)
        )
        
        # Highlight middle node in both lists
        self.play(
            node3_s.animate.set_color(RED),
            node3_d.animate.set_color(RED)
        )
        
        # Demonstrate traversal in singly linked list
        self.play(
            arrow1_s.animate.set_color(GREEN),
            arrow2_s.animate.set_color(GREEN)
        )
        
        # Demonstrate bidirectional access in doubly linked list
        self.play(
            arrow2_d_b.animate.set_color(GREEN),
            arrow3_d_f.animate.set_color(GREEN)
        )
        
        self.wait(2)