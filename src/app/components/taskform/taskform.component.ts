import { Component } from '@angular/core';

@Component({
  selector: 'app-taskform',
  template: `
  <!-- Button trigger modal -->
  <span data-bs-toggle="modal" data-bs-target="#staticBackdrop" style="cursor: pointer; font-size: 1.5rem; margin-left: .5rem;">
    <i class="bi bi-plus-square-fill"></i>
  </span>

  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./taskform.component.scss']
})
export class TaskformComponent {

  addTask() {
    console.log('t');
  }
}
