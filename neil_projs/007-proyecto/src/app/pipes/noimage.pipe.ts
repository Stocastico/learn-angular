import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images:  any[]): string {
    if (!images){
      return "https://rimage.gnst.jp/livejapan.com/public/img/common/noimage.jpg?20190126050038";
    }

    if(images.length > 0){
      return images[0].url;
    }else{
      return "https://rimage.gnst.jp/livejapan.com/public/img/common/noimage.jpg?20190126050038";
    }
    return null;
  }

}
