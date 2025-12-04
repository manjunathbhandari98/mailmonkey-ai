import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { heroAdjustmentsHorizontal, heroClock, heroDocumentText, heroSparkles, heroSquares2x2, heroUserGroup } from '@ng-icons/heroicons/outline';
import { heroClockSolid, heroDocumentTextSolid, heroEnvelopeSolid, heroPencilSquareSolid, heroUserGroupSolid } from '@ng-icons/heroicons/solid';
import { FeatureCard } from '../../../../shared/ui/feature-card/feature-card';
import { quickActions } from './../../../../data/app-data';

@Component({
  selector: 'app-quick-actions',
  imports: [CommonModule,FeatureCard],
  providers:[
    provideIcons({
      heroSparkles,
      heroAdjustmentsHorizontal,
      heroPencilSquareSolid,
      heroEnvelopeSolid,
      heroDocumentText,
      heroDocumentTextSolid,
      heroClockSolid,
      heroUserGroupSolid,
      heroSquares2x2,
      heroClock,
      heroUserGroup
    })
  ],
  templateUrl: './quick-actions.html',
  styleUrl: './quick-actions.scss',
})
export class QuickActions {
quickActions = quickActions
}
