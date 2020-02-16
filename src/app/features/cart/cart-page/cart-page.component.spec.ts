/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CartPageComponent } from './cart-page.component';
import { CartService } from '../cart.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CartPageComponent', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ToastrModule.forRoot(), BrowserAnimationsModule],
      declarations: [CartPageComponent],
      providers: [CartService]
    })
      .compileComponents();
  }));


  it('should initialize the page Properties from the cartService and call the service to delete a book from the cart',
    fakeAsync(inject([CartService, ToastrService],
      (cartService: CartService, toastrService: ToastrService) => {

        /*** mock the method getTotalPrice of the cartService to get the total price of the cart ***/
        spyOn(cartService, 'getBooksInCart').and.returnValue(booksInCartMock);

        /*** mock the method getTotalPrice of the cartService to get the total price of the cart ***/
        spyOn(cartService, 'getTotalPrice').and.returnValue(65);

        /*** mock the method getBestCommercialOffer of the cartService to get the best commercial offer in the cart ***/
        spyOn(cartService, 'getBestCommercialOffer').and.returnValue(new Observable(subscriber => {
          subscriber.next(50);
        }));

        fixture = TestBed.createComponent(CartPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        tick();

        // Vérifier l'initialization de la propriété books de la page à partir du cartService
        expect(component.books).toEqual(booksInCartMock);
        // Vérifier l'initialization de la propriété totalCartPrice de la page à partir du cartService
        expect(component.totalCartPrice).toEqual(65);
        // Vérifier l'initialization de la propriété bestCommercialOffer de la page à partir du cartService
        expect(component.bestCommercialOffer).toEqual(50);


        /****** Tester la suppression d'un livre du panier  ******/

        const cartServiceSpyOnDeleteBook = spyOn(cartService, 'removeBookFromCart').and.callFake(() => { });
        const toastServiceSpy = spyOn(toastrService, 'success').and.callFake(() => { });
        // Simuler le click sur le bouton supprimer pour supprimer un livre du panier
        const compiledDeleteButton = fixture.debugElement.queryAll(By.css('.delete-book'))[0];
        compiledDeleteButton.nativeElement.dispatchEvent(new Event('click'));

        // Vérifier si la méthode removeBookFromCart du cartService et réinitialize les propiété de la page et le toastr a été affiché
        expect(cartServiceSpyOnDeleteBook).toHaveBeenCalled();
        expect(toastServiceSpy).toHaveBeenCalled();
      })));

});

const booksInCartMock = [
  {
    isbn: "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
    title: "Henri Potier à l'école des sorciers",
    price: 35,
    cover: "http://henri-potier.xebia.fr/hp0.jpg",
    synopsis: [
      "Après la mort de ses parents (Lily et James Potier), Henri est recueilli par sa tante Pétunia (la sœur de Lily) et son oncle Vernon à l'âge d'un an. Ces derniers, animés depuis toujours d'une haine féroce envers les parents du garçon qu'ils qualifient de gens « bizarres », voire de « monstres », traitent froidement leur neveu et demeurent indifférents aux humiliations que leur fils Dudley lui fait subir. Henri ignore tout de l'histoire de ses parents, si ce n'est qu'ils ont été tués dans un accident de voiture",
      "Le jour des 11 ans de Henri, un demi-géant du nom de Rubeus Hagrid vient le chercher pour l’emmener à Poudlard, une école de sorcellerie, où il est inscrit depuis sa naissance et attendu pour la prochaine rentrée. Hagrid lui révèle alors qu’il a toujours été un sorcier, tout comme l'étaient ses parents, tués en réalité par le plus puissant mage noir du monde de la sorcellerie, Voldemort (surnommé « Celui-Dont-On-Ne-Doit-Pas-Prononcer-Le-Nom »), après qu'ils ont refusé de se joindre à lui. Ce serait Henri lui-même, alors qu'il n'était encore qu'un bébé, qui aurait fait ricocher le sortilège que Voldemort lui destinait, neutralisant ses pouvoirs et le réduisant à l'état de créature quasi-insignifiante. Le fait d'avoir vécu son enfance chez son oncle et sa tante dépourvus de pouvoirs magiques lui a donc permis de grandir à l'abri de la notoriété qu'il a dans le monde des sorciers.",
      "Henri entre donc à l’école de Poudlard, dirigée par le professeur Albus Dumbledore. Il est envoyé dans la maison Gryffondor par le « choixpeau ». Il y fait la connaissance de Ron Weasley et Hermione Granger, qui deviendront ses complices. Par ailleurs, Henri intègre rapidement l'équipe de Quidditch de sa maison, un sport collectif très populaire chez les sorciers se pratiquant sur des balais volants. Henri connaît probablement la plus heureuse année de sa vie, mais également la plus périlleuse, car Voldemort n'a pas totalement disparu et semble bien décidé à reprendre forme humaine."
    ]
  },
  {
    isbn: "a460afed-e5e7-4e39-a39d-c885c05db861",
    title: "Henri Potier et la Chambre des secrets",
    price: 30,
    cover: "http://henri-potier.xebia.fr/hp1.jpg",
    synopsis: [
      "Henri Potier passe l'été chez les Dursley et reçoit la visite de Dobby, un elfe de maison. Celui-ci vient l'avertir que des évènements étranges vont bientôt se produire à Poudlard et lui conseille donc vivement de ne pas y retourner. Henri choisit d'ignorer cet avertissement. Le jour de son départ pour l'école, il se retrouve bloqué avec Ron Weasley à la gare de King's Cross, sans pouvoir se rendre sur le quai 9 ¾ où les attend le Poudlard Express. En dernier recours, les garçons se rendent donc à Poudlard à l'aide de la voiture volante de Monsieur Weasley et manquent de peu de se faire renvoyer dès leur arrivée à l'école pour avoir été aperçus au cours de leur voyage par plusieurs moldus.",
      "Le nouveau professeur de défense contre les forces du mal, Gilderoy Lockhart, se montre particulièrement narcissique et inefficace. Pendant ce temps, Henri entend une voix étrange en parcourant les couloirs du château, systématiquement associée à la pétrification immédiate d'un élève moldu de l'école. Dès la première attaque, un message sanglant apparaît sur l'un des murs, informant que la Chambre des secrets a été ouverte. Dumbledore et les autres professeurs (ainsi que Henri, Ron et Hermione) doivent prendre les mesures nécessaires pour trouver l'identité du coupable et protéger les élèves contre de nouvelles agressions."
    ]
  }
];
