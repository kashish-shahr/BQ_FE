import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Data, Router } from '@angular/router';
import { DgrDataService } from '../../dgr-data.service';

@Component({
  selector: 'app-add-dgr',
  templateUrl: './add-dgr.component.html',
  styleUrls: ['./add-dgr.component.css'],
})
export class AddDgrComponent {
}