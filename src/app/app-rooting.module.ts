import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { routesNames } from "./configs/RoutesConfig";
import { AppComponent } from "./app.component";

export const routes: Routes = [{
	path: '',
	redirectTo: routesNames.livres,
	pathMatch: 'full'
}, {
	path: routesNames.livres,
	component: AppComponent,
	pathMatch: 'full'
}, {
	path: routesNames.panier,
	component: AppComponent,
	pathMatch: 'full'
}];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			initialNavigation: 'enabled',
			scrollPositionRestoration: 'enabled',
			anchorScrolling: 'enabled'
		})
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule { }