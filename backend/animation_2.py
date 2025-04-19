# To run this animation, use the following command:
# manim -pql <filename>.py Scene2
# or for higher quality:
# manim -pqh <filename>.py Scene2
from manim import *

class Scene2(Scene):
    def construct(self):
        # Title
        title = Text("Insertion Operation", font_size=30).to_edge(UP, buff=0.5)
        self.play(Write(title))
        
        # Create the initial linked list nodes
        node_a = VGroup(
            Rectangle(height=1, width=2),
            Line(start=[0, 0, 0], end=[1, 0, 0]).move_to([0, 0, 0]),
            Text("1", font_size=24).move_to([-0.5, 0, 0]),
            Text("A", font_size=20).next_to(Rectangle(height=1, width=2), DOWN, buff=0.2)
        ).move_to([-4, 0, 0])
        
        node_b = VGroup(
            Rectangle(height=1, width=2),
            Line(start=[0, 0, 0], end=[1, 0, 0]).move_to([0, 0, 0]),
            Text("2", font_size=24).move_to([-0.5, 0, 0]),
            Text("B", font_size=20).next_to(Rectangle(height=1, width=2), DOWN, buff=0.2)
        ).move_to([-1, 0, 0])
        
        node_c = VGroup(
            Rectangle(height=1, width=2),
            Line(start=[0, 0, 0], end=[1, 0, 0]).move_to([0, 0, 0]),
            Text("4", font_size=24).move_to([-0.5, 0, 0]),
            Text("C", font_size=20).next_to(Rectangle(height=1, width=2), DOWN, buff=0.2)
        ).move_to([2, 0, 0])
        
        # Create arrows connecting the nodes
        arrow_ab = Arrow(start=[-3, 0, 0], end=[-2, 0, 0], buff=0, color=WHITE)
        arrow_bc = Arrow(start=[0, 0, 0], end=[1, 0, 0], buff=0, color=WHITE)
        
        # Display initial linked list
        self.play(
            Create(node_a), Create(node_b), Create(node_c),
            GrowArrow(arrow_ab), GrowArrow(arrow_bc)
        )
        self.wait(1)
        
        # Create the new node to be inserted
        node_d = VGroup(
            Rectangle(height=1, width=2),
            Line(start=[0, 0, 0], end=[1, 0, 0]).move_to([0, 0, 0]),
            Text("3", font_size=24).move_to([-0.5, 0, 0]),
            Text("D", font_size=20).next_to(Rectangle(height=1, width=2), DOWN, buff=0.2)
        ).move_to([0.5, -2, 0])
        
        # Step 1: Create the new node
        self.play(Create(node_d))
        self.wait(0.5)
        
        # Step 2: Connect new node to Node C
        arrow_dc = Arrow(start=[1.5, -2, 0], end=[1, 0, 0], buff=0, color=GREEN)
        self.play(GrowArrow(arrow_dc))
        self.wait(0.5)
        
        # Step 3: Update Node B's pointer to Node D
        arrow_bd = Arrow(start=[0, 0, 0], end=[0, -2, 0], buff=0, color=RED)
        self.play(FadeOut(arrow_bc), GrowArrow(arrow_bd))
        self.wait(0.5)
        
        # Final step: Move Node D into position
        arrow_bd_final = Arrow(start=[0, 0, 0], end=[1, 0, 0], buff=0, color=WHITE)
        arrow_dc_final = Arrow(start=[2, 0, 0], end=[3, 0, 0], buff=0, color=WHITE)
        
        self.play(
            node_d.animate.move_to([0.5, 0, 0]),
            FadeOut(arrow_bd),
            FadeOut(arrow_dc),
            GrowArrow(arrow_bd_final),
            GrowArrow(arrow_dc_final)
        )
        
        # Final view
        self.wait(2)