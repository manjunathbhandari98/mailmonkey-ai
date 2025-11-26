import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Footer } from '../../core/footer/footer';
import { NavbarPublic } from '../../core/navbar-public/navbar-public';
import { featureSection, stats } from '../../data/app-data';
import { Demo } from './sections/demo/demo';
import { Features } from './sections/features/features';
import { Hero } from './sections/hero/hero';
import { Pricing } from './sections/pricing/pricing';

@Component({
  selector: 'app-home',
  imports: [NavbarPublic, Footer, Hero, Features, Demo, Pricing],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  constructor(private router:Router){}
  stats = stats;
  featureSection = featureSection;
}
