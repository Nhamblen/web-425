import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  // Inline HTML
  template: `
    <!-- Home Component -->
    <section class="home-container">
      <h1>Welcome to RPG Character Builder</h1>

      <p>
        The RPG Character Builder is your personal workshop for bringing characters to life. Whether you are preparing for your next tabletop campaign,
        designing a character for a novel, or simply exploring ideas for fun, our tool makes the process exciting, engaging, and intuitive. With this builder, you have freedom, and
        you can create fully customized characters by choosing races, classes, abilities, and unique backgrounds, giving you complete control over every detail.
      </p>

      <img src="assets/img/hero.jpg" alt="Hero illustration">
      <p>
        Classes define the path your character takes, offering options such as paladin, warrior, mage, rogue, monk, druid, and many more.
        Each class comes with its own special abilities and play style, allowing you to craft characters that fit your preferred storytelling or gameplay approach.
        Additionally, you can select from a wide variety of races, from humans and elves to dwarves and exotic creatures, each adding distinct traits, cultures,
        and lore to your character. Every decision you make helps shape personality, motivations, and narrative, ensuring that no two creations are ever alike.
        Every choice you make unlocks brand new possibilities, helping your character grow, evolve, and shine in any adventure.
      </p>

      <img src="assets/img/forest.jpg" alt="Mystical forest">
      <p>
        Storytelling is at the heart of every RPG, and our builder embraces that philosophy. You can write detailed backstories,
        track key milestones, and even upload artwork to bring your characters fully to life. Whether you’re building a cunning rogue, a noble paladin,
        or a mysterious druid, this tool gives you the freedom to explore every creative possibility. So gather your ideas and
        let's start creating your next fully personalized character.
      </p>

      <img src="assets/img/mage.png" alt="Mage casting a spell">

    </section>
  `,
  // Inline CSS
  styles: [`
    .home-container {
      max-width: 800px;
      margin: auto;
      text-align: center;
      font-family: 'Courier New', monospace;
    }

    .home-container img {
      width: 100%;
      max-width: 300px;
      margin: 1rem;
      border-radius: 10px;
    }

    h1 {
      font-family: 'Roboto', sans-serif;
    }

    p {
      font-family: 'Lora', serif;
    }
  `]
})
export class HomeComponent { }
