import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseService } from 'src/app/Services/course.service';
import { ActivatedRoute } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';

import { storage } from "../../../../Firebaseconfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrls: ['./edit-topic.component.css']
})
export class EditTopicComponent implements OnInit {

  currentId!: number;
  currentRecord!: any;

  updatedTopic!: any;

  isReading: boolean = false;
  isUrlUpdated: boolean = false;
  file: any;
  uploadedURL: any;

  topicForm!: FormGroup;

  constructor(private courseService: CourseService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.topicForm =  fb.group({
      moduleId: ['', Validators.required],
      topicId:['', Validators.required],
      topicTitle: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(290)])],
      type: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      duration: ['', Validators.compose([Validators.required, Validators.min(1)])],
      description: [''],
    });
  }

  ngOnInit(): void {
    this.currentId = Number(this.route.snapshot.params["id"]);

    this.getDetails(this.currentId);
  }

  getDetails(id: number) {
    this.courseService.getTopicByTopicId(id).subscribe((i: any) => {
      this.currentRecord = i;
      if(this.currentRecord.type == 'Reading'){
        this.isReading = true;
      }
      else{
        this.isReading = false;
      }

      this.topicForm.setValue(this.currentRecord);
    });
  }

  onTopicSubmit(){   
    if(this.isUrlUpdated){
      this.topicForm.controls['description'].setValue(this.uploadedURL); 
    }   
    
    this.updatedTopic = this.topicForm.value;
    this.courseService.putTopics(this.updatedTopic).subscribe((i: any) => {
      this.updatedTopic = i;
    });
    alert("Topic updated successfully...");
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '100',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };

  insertVideo(val: any) {  
    // Create the file metadata
    this.file = val.target.files[0];

    /** @type {any} */
    const metadata = {
      contentType: this.file.type
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, 'videos/' + this.file.name);
    const uploadTask = uploadBytesResumable(storageRef, this.file, metadata);
    
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
          // ...
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          alert('Video uploaded successfully...');
          this.uploadedURL = downloadURL;
          this.isUrlUpdated = true;
        });
      }
    );
  }

}
