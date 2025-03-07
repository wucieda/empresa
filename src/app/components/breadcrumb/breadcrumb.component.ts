import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: { label: string, url: string }[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
    });
  }

  private createBreadcrumbs(route: ActivatedRoute, path: string = '', breadcrumbs: { label: string, url: string }[] = []): { label: string, url: string }[] {
    const routeConfig = route.routeConfig;

    if (routeConfig) {
      let breadcrumbLabel = routeConfig.data?.['breadcrumb'] || routeConfig.path;

      // Si la ruta contiene un parámetro (como :id), usa el nombre estático
      if (breadcrumbLabel?.includes(':')) {
        breadcrumbLabel = breadcrumbLabel.replace(/:\w+/, ''); // Reemplaza ":id" por un string vacío
      }

      path += `/${routeConfig.path?.split('/:')[0]}`; // Evita mostrar "/:id" en la URL

      if (breadcrumbLabel) {
        breadcrumbs.push({ label: breadcrumbLabel, url: path });
      }
    }

    if (route.firstChild) {
      return this.createBreadcrumbs(route.firstChild, path, breadcrumbs);
    }

    return [{ label: 'Home', url: '/' }, ...breadcrumbs];
  }
}
