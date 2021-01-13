import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  // public folder: string;
  // on déclare nos propriétées
  folder = "";
  name = "";

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    // this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    this.activatedRoute.params.subscribe( (params) => {

      console.log('params',params);
      // on charge les paramètres dans les propriétées
      this.folder = params.id;
      this.name = params.name;
    });

  }

}
