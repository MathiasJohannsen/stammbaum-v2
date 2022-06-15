import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit {

  me: any = { first_name: '', last_name: '' };
  parent_a: any = { first_name: '', last_name: '' };
  parent_aa: any = { first_name: '', last_name: '' };
  parent_ab: any = { first_name: '', last_name: '' };
  parent_b: any = { first_name: '', last_name: '' };
  parent_ba: any = { first_name: '', last_name: '' };
  parent_bb: any = { first_name: '', last_name: '' };
  siblings: Array<any> = [];
  children: Array<any> = [];
  partners: Array<any> = [];

  constructor(
    private router: Router,
    private active: ActivatedRoute,
    private api: RestapiService
  ) { }

  ngOnInit() {
    this.show(this.active.snapshot.paramMap.get('id'));
  }

  async show(id) {
    this.clearVariables();
    this.router.navigate(['/tabs/person/' + id]);

    this.api.getPerson(id).subscribe(person => {
      this.me = person;
      console.log('person', this.me);
    });

    this.api.getParents(id).subscribe(parents => {
      try {
        this.parent_a = parents[0];
        this.api.getParents(this.parent_a.id).subscribe(grandParents => {
          try { this.parent_aa = grandParents[0]; } catch {
            this.parent_aa = { first_name: '', last_name: '' };
          }
          try { this.parent_ab = grandParents[1]; } catch {
            this.parent_ab = { first_name: '', last_name: '' };
          }
        });
      } catch {
        this.parent_a = { first_name: '', last_name: '' };
      }
      try {
        this.parent_b = parents[1];
        this.api.getParents(this.parent_b.id).subscribe(grandParents => {
          try { this.parent_ba = grandParents[0]; } catch {
            this.parent_ba = { first_name: '', last_name: '' };
          }
          try { this.parent_bb = grandParents[1]; } catch {
            this.parent_bb = { first_name: '', last_name: '' };
          }
        });
      } catch {
        this.parent_b = { first_name: '', last_name: '' };
      }
      console.log('parent_a', this.parent_a);
      console.log('parent_b', this.parent_b);
      console.log('parent_aa', this.parent_aa);
      console.log('parent_ba', this.parent_ab);
      console.log('parent_ba', this.parent_ba);
      console.log('parent_bb', this.parent_bb);

    });

    this.api.getSiblings(id).subscribe(siblings => {
      this.siblings = siblings;
      console.log('siblings', this.siblings);
    });

    this.api.getPartners(id).subscribe(partners => {
      this.partners = partners;
      console.log('partners', this.partners);
    });

    this.api.getChildren(id).subscribe(children => {
      this.children = children;
      this.children.forEach(child => {
        this.api.getPartners(child.id).subscribe(partners => {
          child.partners = partners;
        });
        this.api.getChildren(child.id).subscribe(grandChildren => {
          child.children = grandChildren;
        });
      });
      console.log('children', this.children);
    });
  }

  clearVariables() {
    this.siblings = [];
    this.children = [];
    this.partners = [];
  }

}
