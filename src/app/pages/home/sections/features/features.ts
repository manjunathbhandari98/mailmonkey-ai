import {
  heroAdjustmentsHorizontal,
  heroClock,
  heroDocumentArrowDown,
  heroDocumentText,
  heroPencilSquare,
  heroSparkles
} from '@ng-icons/heroicons/outline';

import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-features',
  standalone:true,
  imports: [NgIconComponent
  ],
  providers: [
  provideIcons({
      heroSparkles,
      heroPencilSquare,
      heroAdjustmentsHorizontal,
      heroDocumentText,
      heroClock,
      heroDocumentArrowDown
    })
  ],
  templateUrl: './features.html',
  styleUrl: './features.scss',
})
export class Features {
@Input() heading = '';
@Input() subheading = '';
@Input() features:any[] = [];
}
