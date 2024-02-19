angular.module("myApp")
.component("pagination", {
    bindings: {
        totalItems: "<",
        itemsPerPage: "<",
        currentPage: "<",
        onPageChange: "&",
    },
    template: `
   <div>
    <ul class="pagination">
        <li ng-if="$ctrl.currentPage > 1">
            <a ng-click="$ctrl.previousPage()">Previous</a>
        </li>
        
     
        <li ng-if="$ctrl.currentPage < $ctrl.totalPages">
            <a ng-click="$ctrl.nextPage()">Next</a>
        </li>

    </ul>   
   </div>
       
    `,
    controller: class PaginationController {
        $onChanges() {
            this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
            this.pages = Array.from({ length: this.totalPages }, (v, k) => k + 1);
        }
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.onPageChange({ $event: { page: this.currentPage + 1 } });
            }
        }
        previousPage() {
            if (this.currentPage > 1) {
                this.onPageChange({ $event: { page: this.currentPage - 1 } });
            }
        }

    },
    
});