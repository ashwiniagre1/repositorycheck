/**
 * Created by: 
 * Date: 31/08/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Persondetails } from './../../models/persondetails.model'
@Component(
{
	selector: 'persondetails',
	templateUrl: 'persondetails.component.html'
})
export class PersondetailsComponent implements OnInit
{
	
	persondetails: Persondetails;
	
	radiogroupData:any;
	
	constructor( private router: Router)
	{
		this.persondetails = new Persondetails();
		
	this.radiogroupData={"data":[{"genderId":"1","gender":"Female"},{"genderId":"2","gender":"Male"}]};
	}
	ngOnInit()
	{
	}
	
	
	
}

