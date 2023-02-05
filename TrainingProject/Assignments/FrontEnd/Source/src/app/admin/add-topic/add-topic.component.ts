import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/Services/course.service';

import { storage } from "../../../../Firebaseconfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {

  moduleId!: number;

  topicForm: FormGroup;
  newTopic: any;

  file: any;
  uploadedURL: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private courseService: CourseService) {
    this.topicForm = fb.group({
      topicTitle: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(290)])],
      type: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      duration: ['', Validators.compose([Validators.required, Validators.min(1)])],
      description: [''],
      moduleId: ['']
    });
  }

  ngOnInit(): void {
    this.moduleId = this.route.snapshot.params['id'];
  }

  onTopicSubmit() {
    this.topicForm.controls['moduleId'].setValue(this.moduleId);
    this.topicForm.controls['description'].setValue(this.uploadedURL);
    this.newTopic = this.topicForm.value;

    this.courseService.postTopics(this.newTopic).subscribe((i: any) => {
      this.newTopic = i;
    });

    alert("Topic added successfully...")
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
        });
      }
    );
  }

}
