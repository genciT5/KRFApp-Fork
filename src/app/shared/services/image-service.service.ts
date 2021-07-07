import { Injectable } from '@angular/core';

// import { Plugins, CameraResultType, FilesystemDirectory, 
  // CameraPhoto, CameraSource } from '@capacitor/core';
// import { Ng2ImgMaxService } from 'ng2-img-max';
// import { Camera, CameraPhoto, CameraResultType, CameraSource } from '@capacitor/camera';
// import { Filesystem, Directory } from '@capacitor/filesystem'


export interface Photo {
  fileName: string;
  webviewPath: any;
  fileBlob: any,
  fileFile: any,
  from: string
}


@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  public photos: Photo[] = [];
  constructor(
    // public ng2ImgMax: Ng2ImgMaxService
    ) { }

//   private async savePicture(cameraPhoto: CameraPhoto) { 
//     const base64Data = await this.readAsBase64(cameraPhoto);

//     const response = await fetch(cameraPhoto.webPath!);
//     const blob = await response.blob();
//     console.log(blob);
//     const file = new File([blob], "Name", {
//       type: blob.type,
//     });
//   // Write the file to the data directory
//   const fileName = new Date().getTime() + '.jpeg';
//   const savedFile = await Filesystem.writeFile({
//     path: fileName,
//     data: base64Data,
//     directory: Directory.Data
//   });
//   console.log(savedFile);

    
//       // Use webPath to display the new image instead of base64 since it's
//       // already loaded into memory
//       return {
//         fileName: fileName,
//         webviewPath: cameraPhoto.webPath,
//         fileBlob: blob,
//         fileFile: file,
//         from: 'CameraOrGallery'
//       };
//   }

//   private async readAsBase64(cameraPhoto: CameraPhoto) {
//   // Fetch the photo, read as a blob, then convert to base64 format
//   const response = await fetch(cameraPhoto.webPath!);
//   const blob = await response.blob();
//   console.log(blob);

//   return await this.convertBlobToBase64(blob) as string;  
// }

// convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
//   const reader = new FileReader;
//   reader.onerror = reject;
//   reader.onload = () => {
//       resolve(reader.result);
//   };
//   reader.readAsDataURL(blob);
// });

//   public async addNewToGallery(isCameraSelected) {
//     // Take a photo
//     console.log(isCameraSelected);
   
//     let selectPhotoOptions = {
//       allowEditing: false,
//       resultType: CameraResultType.Uri, 
//       quality: 100 
//     }

//     isCameraSelected ? selectPhotoOptions['source'] = CameraSource.Camera : selectPhotoOptions['source'] = CameraSource.Photos

//     console.log(selectPhotoOptions)
//     const capturedPhoto = await Camera.getPhoto(selectPhotoOptions);

//     console.log(capturedPhoto);

//     let savedImageFile = await this.savePicture(capturedPhoto);
//       this.photos.push(savedImageFile);
//     console.log(savedImageFile);
//     // this.compressImageSize(savedImageFile.fileFile).then((compressedData: any) => {
//     //   savedImageFile['fileFile'] = compressedData.data;
//     //   this.photos.push(savedImageFile);
//     //   console.log(this.photos);
//     // }).catch((err: any) => {
//     //   console.log(err);
//     // });
//   }

//   clearImagesAfterUpload() {
//     this.photos = [];
//   }

  
//   compressImageSize(imageData) {
//       let counter = 0;
//       let intervalId = setInterval(() => {
//         counter = counter + 1;
//         console.log(counter)
//         // if(counter === 0) clearInterval(intervalId)
//     }, 1000)
//     let resolveFunction: (confirm: any) => void;
//     const promise = new Promise<any>(resolve => {
//         resolveFunction = resolve;
//       });

      
//     var totalSizeMB = imageData.size / Math.pow(1024,2)
//     totalSizeMB = +totalSizeMB.toFixed(1)
//     console.log(totalSizeMB);
//     var compressSize = 0.3;

//     if (totalSizeMB >= 0 && totalSizeMB < 5) {

//     } else if (totalSizeMB >= 5 && totalSizeMB < 10) {
//       compressSize = 0.6;
    
//     } else if (totalSizeMB >= 10 && totalSizeMB < 15) {
//       compressSize = 0.8;

//     } else if (totalSizeMB >= 15 && totalSizeMB < 20) {
//       compressSize = 1.0
//     } if (totalSizeMB > 20) {
//       compressSize = 1.2
//     }
    
//     this.ng2ImgMax.compressImage(imageData, compressSize).subscribe(
//         result => {
//           clearInterval(intervalId)
//           resolveFunction({status: true, data: result, compressSize})
//         },
//         error => {
//           resolveFunction({status: false, err: error})
//         }
//       );

//     return promise;
// }

}
