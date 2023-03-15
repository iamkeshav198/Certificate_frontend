
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { ActivatedRoute } from '@angular/router';
// import { saveAs } from 'file-saver';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent {
  name: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.name = this.route.snapshot.paramMap.get('name');
  }
}