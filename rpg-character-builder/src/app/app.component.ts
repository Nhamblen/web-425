import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // Inline HTML template
  template: `
    <!-- ===== Header Section ===== -->
    <header class="app-header">
      <nav>
        <ul>
          <!-- Navigation menu - placeholder links -->
          <li><a href="#">Home</a></li>
          <li><a href="#">Characters</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    </header>

    <!-- ===== Main Content Area ===== -->
    <!-- The router-outlet displays routed components (like HomeComponent) -->
    <main class="app-main">
      <router-outlet></router-outlet>
    </main>

    <!-- ===== Footer Section ===== -->
    <footer class="app-footer">
      <nav>
        <ul>
          <!-- Mirrored navigation menu -->
          <li><a href="#">Home</a></li>
          <li><a href="#">Characters</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
      <p>&copy; 2025 RPG Character Builder</p>
    </footer>
  `,
  // Inline CSS styles
  styles: [`
    /* General reset styles */
    ul {
      list-style: none;
      padding: 0;
      display: flex;
      gap: 1rem;
    }

    a {
      text-decoration: none;
      color: #fff;
      font-weight: bold;
    }

    /* Header styles */
    .app-header {
      background-color: #333;
      padding: 1rem;
      font-family: 'Roboto', sans-serif;
    }

    /* Main content styles */
    .app-main {
      padding: 2rem;
      background-color: #f9f9f9;
      font-family: 'Lora', serif;
      min-height: 60vh;
    }

    /* Footer styles */
    .app-footer {
      background-color: #333;
      color: white;
      padding: 1rem;
      font-family: 'Courier New', monospace;
      text-align: center;
    }
  `]
})
export class AppComponent {
  title = 'rpg-character-builder';
}
