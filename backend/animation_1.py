# To run this animation, use the following command:
# manim -pql <filename>.py Scene1
# or for higher quality:
# manim -pqh <filename>.py Scene1
from manim import *

class Scene1(Scene):
    def construct(self):
        # Title
        title = Text("Nodes and Pointers", font_size=36).to_edge(UP, buff=0.5)
        
        # Create nodes with data and pointer sections
        node1 = VGroup(
            Rectangle(height=1, width=1.5, color=BLUE),
            Rectangle(height=1, width=0.8, color=BLUE)
        ).arrange(RIGHT, buff=0)
        
        node2 = VGroup(
            Rectangle(height=1, width=1.5, color=BLUE),
            Rectangle(height=1, width=0.8, color=BLUE)
        ).arrange(RIGHT, buff=0)
        
        node3 = VGroup(
            Rectangle(height=1, width=1.5, color=BLUE),
            Rectangle(height=1, width=0.8, color=BLUE)
        ).arrange(RIGHT, buff=0)
        
        node4 = VGroup(
            Rectangle(height=1, width=1.5, color=BLUE),
            Rectangle(height=1, width=0.8, color=BLUE)
        ).arrange(RIGHT, buff=0)
        
        # Position nodes at different locations
        node1.move_to([-4, 1, 0])
        node2.move_to([0, -1, 0])
        node3.move_to([3, 1.5, 0])
        node4.move_to([1.5, -2, 0])
        
        # Add data values to nodes
        data1 = Text("17", font_size=30).move_to(node1[0])
        data2 = Text("42", font_size=30).move_to(node2[0])
        data3 = Text("8", font_size=30).move_to(node3[0])
        data4 = Text("25", font_size=30).move_to(node4[0])
        
        # Create arrows between nodes
        arrow1 = CurvedArrow(node1[1].get_center(), node2.get_left(), color=YELLOW)
        arrow2 = CurvedArrow(node2[1].get_center(), node3.get_left(), color=YELLOW)
        arrow3 = CurvedArrow(node3[1].get_center(), node4.get_left(), color=YELLOW)
        
        # Memory address labels
        addr1 = Text("0x7A2D", font_size=24, color=GREEN).next_to(node1, DOWN, buff=0.3)
        addr2 = Text("0x1F30", font_size=24, color=GREEN).next_to(node2, DOWN, buff=0.3)
        addr3 = Text("0x9C01", font_size=24, color=GREEN).next_to(node3, DOWN, buff=0.3)
        addr4 = Text("0x3B54", font_size=24, color=GREEN).next_to(node4, DOWN, buff=0.3)
        
        # Animation sequence
        self.play(Write(title))
        self.wait(0.5)
        
        # Create nodes with data
        self.play(Create(node1), Write(data1), Write(addr1))
        self.wait(0.5)
        
        self.play(Create(node2), Write(data2), Write(addr2))
        self.play(Create(arrow1))
        self.wait(0.5)
        
        self.play(Create(node3), Write(data3), Write(addr3))
        self.play(Create(arrow2))
        self.wait(0.5)
        
        self.play(Create(node4), Write(data4), Write(addr4))
        self.play(Create(arrow3))
        self.wait(1)
        
        # Add explanation text at bottom
        explanation = Text("Non-contiguous memory with pointer connections", 
                          font_size=26).to_edge(DOWN, buff=0.5)
        self.play(Write(explanation))
        self.wait(2)