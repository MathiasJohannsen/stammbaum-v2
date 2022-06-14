import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit {

  me: any = { vname: '', nname: '' };
  parent_a: any = { vname: '', nname: '' };
  parent_aa: any = { vname: '', nname: '' };
  parent_ab: any = { vname: '', nname: '' };
  parent_b: any = { vname: '', nname: '' };
  parent_ba: any = { vname: '', nname: '' };
  parent_bb: any = { vname: '', nname: '' };
  siblings: Array<any> = [];
  children: Array<any> = [];
  partners: Array<any> = [];

  constructor(
    private router: Router,
    private active: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.show(this.active.snapshot.paramMap.get('id'));
  }

  // async show(id) {
  //   this.clearVariables();
  //   this.router.navigate(['person', id]);
  //   this.getMe(id).then(() => {
  //     console.log(this.me);
  //     console.log(this.siblings);
  //     console.log(this.children);
  //     console.log(this.partners);
  //   });
  // }

  // clearVariables() {
  //   this.me = { vname: '', nname: '' };
  //   this.parent_a = { vname: '', nname: '' };
  //   this.parent_aa = { vname: '', nname: '' };
  //   this.parent_ab = { vname: '', nname: '' };
  //   this.parent_b = { vname: '', nname: '' };
  //   this.parent_ba = { vname: '', nname: '' };
  //   this.parent_bb = { vname: '', nname: '' };
  //   this.siblings = [];
  //   this.children = [];
  //   this.partners = [];
  // }

  // async getMe(me_id: string) {
  //   const ref = this.db.collection('person');
  //   await ref.doc(me_id).get().toPromise().then(async (me: any) => {
  //     this.me = me.data();
  //     this.me.id = me.id;
  //     this.getParents();
  //     this.getSiblings();
  //     this.getChildren();
  //   }).catch();
  // }

  // async getParents() {
  //   const ref = this.db.collection('person');
  //   try {
  //     await ref.doc(this.me.parent_a.toString()).get().toPromise().then(async (p: any) => {
  //       this.parent_a = p.data();
  //       this.parent_a.id = p.id;
  //       try {
  //         await ref.doc(p.data().parent_a.toString()).get().toPromise().then(async (p: any) => {
  //           this.parent_aa = p.data();
  //           this.parent_aa.id = p.id;
  //         });
  //       } catch { }
  //       try {
  //         await ref.doc(p.data().parent_b.toString()).get().toPromise().then(async (p: any) => {
  //           this.parent_ab = p.data();
  //           this.parent_ab.id = p.id;
  //         });
  //       } catch { }
  //     });
  //   } catch { }
  //   try {
  //     await ref.doc(this.me.parent_b.toString()).get().toPromise().then(async (p: any) => {
  //       this.parent_b = p.data();
  //       this.parent_b.id = p.id;
  //       try {
  //         await ref.doc(p.data().parent_a.toString()).get().toPromise().then(async (p: any) => {
  //           this.parent_ba = p.data();
  //           this.parent_ba.id = p.id;
  //         });
  //       } catch { }
  //       try {
  //         await ref.doc(p.data().parent_b.toString()).get().toPromise().then(async (p: any) => {
  //           this.parent_bb = p.data();
  //           this.parent_bb.id = p.id;
  //         });
  //       } catch { }
  //     });
  //   } catch { }
  // }

  // async getSiblings() {
  //   const ref = this.db.collection('person').ref;
  //   try {
  //     ref.where('parent_a', '==', this.me.parent_a).get().then(async (p: any) => {
  //       p.forEach(element => {
  //         if (element.data().parent_b == this.me.parent_b && element.id != this.me.id) {
  //           const sibling = element.data();
  //           sibling.id = element.id;
  //           this.siblings.push(sibling);
  //         }
  //       });
  //     });
  //   } catch { }
  //   try {
  //     ref.where('parent_b', '==', this.me.parent_a).get().then(async (p: any) => {
  //       p.forEach(element => {
  //         if (element.data().parent_a == this.me.parent_b && element.id != this.me.id) {
  //           const sibling = element.data();
  //           sibling.id = element.id;
  //           this.siblings.push(sibling);
  //         }
  //       });
  //     });
  //   } catch { }
  // }

  // getGrandchildren = child => {
  //   const ref = this.db.collection('person').ref;
  //   const obj = { me: child, children: [], partners: [] };

  //       //get children of child
  //       ref.where('parent_a', '==', parseInt(child.id)).get().then(async (p: any) => {
  //         p.forEach(async element => {
  //           const grandChild = element.data();
  //           grandChild.id = element.id;
  //           obj.children.push(grandChild);
  //           //check Partner of child
  //           let isNew = true;
  //           obj.partners.forEach(element => {
  //             if (element.id == grandChild.parent_b) {isNew = false;}
  //           });
  //           if (isNew) {
  //             obj.partners.push({id: grandChild.parent_b.toString()});
  //             const ref = this.db.collection('person');
  //             await ref.doc(grandChild.parent_b.toString()).get().toPromise().then(async (p: any) => {
  //               const partner = p.data();
  //               partner.id = p.id;
  //               const index = obj.partners.map(item => item.id).indexOf(p.id);
  //               if (index >= 0) {obj.partners[index] = partner;}
  //             }).catch();
  //           }
  //         });
  //       }).catch();

  //       ref.where('parent_b', '==', parseInt(child.id)).get().then(async (p: any) => {
  //         p.forEach(async element => {
  //           const grandChild = element.data();
  //           grandChild.id = element.id;
  //           obj.children.push(grandChild);
  //           //check Partner of child
  //           let isNew = true;
  //           obj.partners.forEach(element => {
  //             if (element.id == grandChild.parent_a) {isNew = false;}
  //           });
  //           if (isNew) {
  //             obj.partners.push({id: grandChild.parent_a.toString()});
  //             const ref = this.db.collection('person');
  //             await ref.doc(grandChild.parent_a.toString()).get().toPromise().then(async (p: any) => {
  //               const partner = p.data();
  //               partner.id = p.id;
  //               const index = obj.partners.map(item => item.id).indexOf(p.id);
  //               if (index >= 0) {obj.partners[index] = partner;}
  //             }).catch();
  //           }
  //         });
  //       }).catch();

  //       this.children.push(obj);
  // };

  // async getChildren() {
  //   const ref = this.db.collection('person').ref;
  //   ref.where('parent_a', '==', parseInt(this.me.id)).get().then(async (p: any) => {
  //     p.forEach(async element => {
  //       const child = element.data();
  //       child.id = element.id;
  //       this.checkPartner(child.parent_b.toString());

  //       this.getGrandchildren(child);

  //     });
  //   }).catch();
  //   ref.where('parent_b', '==', parseInt(this.me.id)).get().then(async (p: any) => {
  //     p.forEach(async element => {
  //       const child = element.data();
  //       child.id = element.id;
  //       this.checkPartner(child.parent_a.toString());

  //       this.getGrandchildren(child);

  //     });
  //   }).catch();
  // }

  // async checkPartner(p_id: string) {
  //   const ref = this.db.collection('person');
  //   let isNew = true;

  //   this.partners.forEach(element => {
  //     if (element.id == p_id.toString()) {isNew = false;}
  //   });

  //   if (isNew) {
  //     this.partners.push({ id: p_id });
  //     await ref.doc(p_id.toString()).get().toPromise().then(async (p: any) => {
  //       const partner = p.data();
  //       partner.id = p.id;
  //       const index = this.partners.map(item => item.id).indexOf(p.id);
  //       if (index >= 0) {this.partners[index] = partner;}
  //     }).catch();
  //   }
  // }

}
