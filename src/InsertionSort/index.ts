export class InsertionSort {

    constructor(val: Array<number>) {
        console.log(val);
        this.sort(val);
        console.log(val);
    }

    sort(a: Array<number>) {
        for(let i=1;i<a.length;i++) { // start from 1 to last index
            let previousIndex = i;
            let currentEl = a[i];
            while(currentEl<a[previousIndex-1] && previousIndex>=1) { // inner loop continues as previousIndex from v-1 to 1 and compares+replaces if needed
                // hence, putting the right el at a[] element
                a[previousIndex] = a[previousIndex-1];
                previousIndex--;
            }
            a[previousIndex] = currentEl;
        }
    }

}