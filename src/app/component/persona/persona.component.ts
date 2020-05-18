import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { Persona } from './persona';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona: Persona[];
  personaBD: Persona = new Persona;

  dialogo: Boolean;
  estado: Boolean;

  constructor(private service: PersonaService) { this.getPersona() }


  // PRIMEFACES
  dialogActualizar(persona: Persona) {
    this.dialogo = true;
    this.estado = true;
    this.getPersonaId(persona);
  }

  dialogRegistrar() {
    this.personaBD = new Persona();
    this.dialogo = true;
    this.estado = false;
  }

  // REST 

  getPersona() {
    this.service.getPersona().subscribe((per: any) => {
      this.persona = per;
      console.log(this.persona);
    });
  }

  getPersonaId(persona: Persona) {
    this.service.getPersonaId(persona).subscribe((per: any) => {
      this.personaBD = per;
      console.log(this.personaBD);
    });
  }

  getPersonaNombre(nombres: string) {
    this.service.getPersonaNombre(nombres).subscribe((per: any) => {
      this.personaBD = per;
      console.log(this.personaBD);
    });
  }

  postPersona(persona: Persona) {
    this.service.postPersona(persona).subscribe((per: any) => {
      this.getPersona();
    });
  }

  putPersona(persona: Persona) {
    this.service.putPersona(persona).subscribe((per: any) => {
      this.getPersona();
    });
  }

  deletePersona(persona: Persona) {
    this.service.deletePersona(persona).subscribe(per => {
      this.getPersona();
    });
  }
  items: MenuItem[];
  ngOnInit(): void {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'Project' },
            { label: 'Other' },
          ]
        },
        { label: 'Open' },
        { separator: true },
        { label: 'Quit' }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      },
      {
        label: 'Help',
        icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'Contents'
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'File'
              }
            ]
          }
        ]
      },
      {
        label: 'Actions',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              { label: 'Save', icon: 'pi pi-fw pi-save' },
              { label: 'Update', icon: 'pi pi-fw pi-save' },
            ]
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-tags',
            items: [
              { label: 'Delete', icon: 'pi pi-fw pi-minus' }
            ]
          }
        ]
      },
      { separator: true },
      {
        label: 'Quit', icon: 'pi pi-fw pi-times'
      }
    ];
  }

}
