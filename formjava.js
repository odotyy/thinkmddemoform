// product = engineer,
//clinician = clinician
/*
Hit List:
    - FIgure out upload of picture
    - How to get submition to an excel
    -add image type (static vs dynamic)
    -Populated dropdown text look up to see if made already
    -Make submitted panel view look like a panel
    -Make panels transferable between engineer and clinician
*/


Vue.config.devtools = true


var app = new Vue({
    el: '#app',
    data: {
        
        selectedVarient: 0,
        
        varients: [
            {
                varientID: 1,
                varientName: "Engineer",
                varientImage: 'https://thinkmd.org/wp-content/uploads/2020/03/THINKMD-website.png'
            },
            {
                varientID: 2,
                varientName: "Clinician",
                varientImage: 'https://thinkmd.org/wp-content/uploads/2020/03/THINKMD-website.png'
            },
            {
              varientID: 3,
              varientName: "MetaData",
              varientImage: 'https://thinkmd.org/wp-content/uploads/2020/03/THINKMD-website.png'
          },
          {
            varientID: 4,
            varientName: "Other",
            varientImage: 'https://thinkmd.org/wp-content/uploads/2020/03/THINKMD-website.png'
        },
        ],
        
        showproduct: false,
        showclinician: false,
        showmetadata: false,
        showother: false,
        panels: [],
        
    },
    methods: {
      
        updateProduct: function(index){
            this.selectedVarient = index
        },
        toggleproductrev: function() {
            this.showproduct= !this.showproduct,
            this.showclinician= false,
            this.showother= false,
            this.showmetadata= false
        },
        clinician: function() {
            this.showclinician= !this.showclinician,
            this.showproduct =false,
            this.showother= false,
            this.showmetadata= false
        },
        metadata: function() {
          this.showmetadata= !this.showmetadata,
          this.showproduct =false,
          this.showclinician= false,
          this.showother= false
      },
      other: function() {
        this.showother= !this.showother,
        this.showproduct =false,
        this.showclinician= false,
        this.showmetadata= false
    },
        //addPanel: function (NewPanel) {
        //    this.panels.push(NewPanel)
        //}
    },
    computed: {
        image() {
            return this.varients[this.selectedVarient].varientImage
        }
    }

})

Vue.component('product', {
    template: `
    
    <div>
    <form class="review-form" @submit.prevent="onSubmit">

        <h1>Engineer Creation Panel</h1>
        <p>Click on the checkboxes for defintions of each element</p>
        <br>

        <p>Panel Name: <input v-model = "pname" type="text" size="30" required>
        <input type="checkbox" id="one" value="One" v-model="defone">
        <span v-if="defone === true" >Name of panel appearing in the code and which will also be the title of the panel in the database/dashboards/analysis as well as the title of the response in the summary panel.</span></p> 
        
        <p>Prompt Translated <input type = "textarea" v-model = "ptrans">
        <input type="checkbox" id="one" value="One" v-model="deftwo">
        <span v-if="deftwo === true" >Any translations that need to occur regarding the noun used in the text. Other languages does this panel/CDE have to be in.</span></p> 

        <p>SDS code for the panel: <input v-model = "SDS" type="text" size="30">
        <input type="checkbox" id="one" value="One" v-model="defthree">
        <span v-if="defthree === true" >The code associated with the SDS and QA system of testing.</span></p>

        

        <p>Info Button Translated <input type = "textarea" v-model = "infobutttrans">
        <input type="checkbox" id="one" value="One" v-model="deffive">
        <span v-if="deffive === true" >Any translations that need to occur regarding the noun used in the text. Other languages does this panel/CDE have to be in.</span></p> 

        
        <p>Training Button Translated <input type = "textarea" v-model = "trainingtrans">
        <input type="checkbox" id="one" value="One" v-model="deffour">
        <span v-if="deffour === true" >Any translations that need to occur regarding the noun used in the text. Other languages does this panel/CDE have to be in.</span></p> 
        
        <p>Laymen's Def Translated <input type = "textarea" v-model = "laymentrans">
        <input type="checkbox" id="one" value="One" v-model="defsix">
        <span v-if="defsix === true" >Any translations that need to occur regarding the noun used in the text. Other languages does this panel/CDE have to be in.</span></p> 

        <p>Response Choices Translated</p>
        <p><textarea v-model = "responsestrans"></textarea>
        <input type="checkbox" id="one" value="One" v-model="defsev">
        <span v-if="defsev === true" >Any translations that need to occur regarding the noun used in the text. Other languages does this panel/CDE have to be in.</span></p></p> 


        <p>Image Code Name <input type = "textarea" v-model = "imgcode">
        <input type="checkbox" id="one" value="One" v-model="defeigh">
        <span v-if="defeigh === true" >The image location/tag so that is can be looked up.</span></p> 


          <br>  
        <p>
          <input type="submit" value="Submit">  
        </p>    
    </form>
    <div>
    
    <h2>Panels</h2>
        <p v-if="!panels.length">There are no new panels yet.</p>
        <ul>
          <li v-for="panel in panels">
          <h1>{{ panel.pname }}</h1>
          <ul>
          <p>SDS Code: {{panel.SDS}} </p>
          <p>Prompt Translated: {{panel.ptrans}}</p>
          <p>Infobutton Translated: {{panel.infobutttrans}} </p>
          <p>Allowed Responses Translated: {{panel.responsestrans}} </p>
          <p>Training Button Translated: {{panel.trainingtrans}} </p>
          <p>Laymen's Def Translated: {{panel.laymentrans}} </p>
          <p> Image Code: {{panel.imgcode}}</p>
          </ul>
          </li>
        </ul>
    </div>
    </div>
    `,
    methods: {
      onSubmit() {
        let NewPanel= {
        pname: this.pname,
        SDS: this.SDS,
        ptrans: this.ptrans,
        laymentrans: this.laymentrans,
        infobutttrans: this.infobutttrans,
        trainingtrans: this.trainingtrans,
        responsestrans: this.responsestrans,
        imgcode: this.imgcode,
        }
        //console.log('pname'.this.pname)
        //addPanel(NewPanel),
        this.panels.push(NewPanel),
        alert("Creating the Panel")

      },
      paneldef(index) {
        alert("definition",5)
      },
      
    },
    
    data() {
      
      return {
        pname: "",
        SDS: "",     
        responsestrans: "",
        infobutttrans: "",
        ptrans: "",
        trainingtrans: "",
        laymentrans: "",
        imgcode: "",
        defone: "",
        deftwo: "",
        defthree: "",
        deffour: "",
        deffive: "",
        defsix: "",
        defsev: "",
        defeigh: "",
        panels: [],
      }
      
    },
    
})


Vue.component('clinician', {
    template: `
    <div>
    <form class="review-form" @submit.prevent="onSubmit">
      
        <h1>Clinician Creation Panel</h1>
        <p>Click on checkboxes for Definitions</p>
        <br>

        <p>What is the title of the Panel? <input v-model = "pname" type="text" size="30" required><input type="checkbox" id="one" value="One" v-model="defone">
        <span v-if="defone === true" > Name of panel appearing in the code and which will also be the title of the panel in the database/dashboards/analysis as well as the title of the response in the summary panel.</span></p>

        <p>What is the prompt of the question on the Panel? <input v-model = "prompt" type="text" size="30" required>
        <input type="checkbox" id="one" value="One" v-model="deftwo">
        <span v-if="deftwo === true" >Directions for the panel user (Ex. Chose ONE)</span></p> 

        <p>Panel Definition - Clinical: <input v-model = "defclin" type="text" size="30"> 
        <input type="checkbox" id="one" value="One" v-model="defthree">
        <span v-if="defthree === true" >Clinical Definition of the task or assessment. (IE. This panel collect data on the heart rate of the patient, collected through the THINKMD app, and stored with a percentile range) </span></p> 

        <p>Panel Definition - Non-Clinical: <input v-model = "defnonclin" type="text" size="30">
        <input type="checkbox" id="one" value="One" v-model="deffour">
        <span v-if="deffour === true" >Layman's Definition: The definition of the panel in non-clinical terms</span></p> 

        <p>Type of Action the Panel Needs to Advance
        <input type="checkbox" id="one" value="One" v-model="deffive">
        <span v-if="deffive === true" >The physical action needed to move forward in the platform.</span></p>
	    <select v-model = "actions">
	      <option value = "One">Select One</option>
		    <option value = "OneorMore">Select One or More</option>
        <option value = "Slider">Slider</option>
        <option value = "Typed">Typed Response</option>
      </select>

      <p>What are the responses on the panel? (Seperate by Commas)</p>
      <p><input type = "textarea" v-model = "responses">
      <input type="checkbox" id="one" value="One" v-model="defsix">
      <span v-if="defsix === true" >Choices for the given responses, or range if slider.</span></p>

        <p>Info Button <input type = "textarea" v-model = "infobutt">
        <input type="checkbox" id="one" value="One" v-model="defsev">
        <span v-if="defsev === true" > Information about the task given, including why task is being performed or asked.</span></p> 

        <p>Training Button <input type = "textarea" v-model = "training">
        <input type="checkbox" id="one" value="One" v-model="defeigh">
        <span v-if="defeigh === true" >How to perform the task given.</span></p> 

        <p>Unique Propeties <input type = "textarea" v-model = "uniqueprop">
        <input type="checkbox" id="one" value="One" v-model="defnine">
        <span v-if="defnine === true" >Actions that are unique to this panel, including required fields or special animations. (IE. Skip Logic, Age specific panel, animated GIF)</span></p>

        <p>FHIR Code: <input v-model = "fhir" type="text" size="30" >
        <input type="checkbox" id="one" value="One" v-model="deften">
        <span v-if="deften === true" >FHIR Code relating to the assesment or answer.</span></p> 

        <p>Image File: <input v-model = "imagelink" type= "file">
        <input type="checkbox" id="one" value="One" v-model="defelev">
        <span v-if="defelev === true" >Link or file to image</span></p>

        <p>Image Type: <input v-model = "imagetype" type= "text">
        <input type="checkbox" id="one" value="One" v-model="defthir">
        <span v-if="defthir === true" >Type of Image (Static or Dynamic)</span></p>
         
        <p>Triage: <input type="checkbox" id="one" value="One" v-model="deftwel">
        <span v-if="deftwel === true" >Severity Level of the Assesment</span></p>
        <select v-model = "severity">
            <option value = "High">Critical</option>
            <option value = "Medium">Medium</option>
            <option value = "Low">Low Risk</option>
        </select>
        <br> 
        <br>    
        <p>
          <input type="submit" value="Submit">  
        </p>    
      
    </form>
    <div>
    
    <h2>Panels</h2>
        <p v-if="!panels.length">There are no new panels yet.</p>
        <ul>
          <li v-for="panel in panels">
          <h1>{{ panel.pname }}</h1>
          <ul>
          <p>Prompt: {{panel.prompt}} </p>
          <p>Def. Clinical: {{panel.defclin}} </p>
          <p>Def. NON-Clinical: {{panel.defnonclin}} </p>
          <p>Actions:  {{panel.actions}} </p>
          <p>Infobutton: {{panel.infobutt}} </p>
          <p>Unique Properties: {{panel.uniqueprop}} </p>
          <p>FHIR Code: {{panel.fhir}}</p>
          <p>Image File: {{panel.imagelink}} </p>
          <p>Image Type: {{panel.imagetype}}</p>
          <p>Allowed Responses: {{panel.responses}} </p>
          <p>Severity: {{panel.severity}}</p>
          </ul>
          </li>
        </ul>
    </div>
    </div>
    `,
    methods: {
      onSubmit() {
        let NewPanel= {
            pname: this.pname,
            prompt: this.prompt,
            track: this.track,
            actions: this.actions,
            infobutt: this.infobutt,
            uniqueprop: this.uniqueprop,
            imagelink: this.imagelink,
            imagetype: this.imagetype,
            responses: this.responses,
            severity: this.severity,
            defclin: this.defclin,
            defnonclin: this.defnonclin,
            fhir: this.fhir
            
        }
           
        //addPanel(NewPanel),
        this.panels.push(NewPanel),
        //console.log('pname'.this.pname)
        alert("Creating the Panel")
      }
    },
    data() {
      return {
        pname: "",
        prompt: "",
        track: "",
        actions: "",
        infobutt: "",
        training: "",
        uniqueprop: "",
        imagelink: "",
        responses: "",
        severity: "",
        defclin: "",
        defnonclin: "",
        fhir: "",
        imagetype: "",
        defone: "",
        deftwo: "",
        defthree: "",
        deffour: "",
        deffive: "",
        defnine: "",
        defsix: "",
        defsev: "",
        defeigh: "",
        deften: "",
        defelev: "",
        deftwel: "",
        defthir: "",
        panels: [],
      }
    }
    
})


Vue.component('metadata', {
  template: `
  <div>
    <form class="review-form" @submit.prevent="onSubmit">
      
        <h1>MetaData Creation Panel</h1>
        <p>Click on checkboxes for Definitions</p>
        <br>

        <p>What is the title of the Panel? <input v-model = "pname" type="text" size="30" required><input type="checkbox" id="one" value="One" v-model="defzero">
        <span v-if="defzero === true" > Name of panel appearing in the code and which will also be the title of the panel in the database/dashboards/analysis as well as the title of the response in the summary panel.</span></p>

        <p>What is the type of the Panel? <input v-model = "ptype" type="text" size="30" required><input type="checkbox" id="one" value="One" v-model="defone">
        <span v-if="defone === true" > The type of panel (IE. Multiple select, Single select)</span></p>

        <p>Type of Action Recorded
        <input type="checkbox" id="one" value="One" v-model="defthree">
        <span v-if="defthree === true" >The type of panel based on the characteristics of the question or responses. </span></p>
	    <select v-model = "actions">
	      <option value = "Observation">Observation</option>
		    <option value = "Physical">Physical Finding</option>
        <option value = "Historical">Historical Finding</option>
        <option value = "Interview">Interview</option>
        <option value = "Vitals/Device">Vitals/Device Generate</option>
      </select>

      <p>Who is Responding to this question? <input type="checkbox" id="one" value="One" v-model="deffour">
        <span v-if="deffour === true" >Type of person being evaluated/to whom the question is being posed. (IE. is the data produced by a CHW, a parent, the child)</span></p>
        <select v-model = "responder">
            <option value = "Child">Child</option>
            <option value = "PG">Parent/Guardian</option>
            <option value = "CHW">CHW</option>
            <option value = "Nurse">Nurse</option>
            <option value = "DL">Device/Logic</option>
        </select>

     
        <p>What assesment does this panel contribute to? <input v-model = "asses" type="text" size="30" required>
        <input type="checkbox" id="one" value="One" v-model="deftwo">
        <span v-if="deftwo === true" >The assessment, if any, that the panel or clinical data elements contributes to. (IE. Dehydration and Respiratory Distress)</span></p> 
        
        <p>Track the Panel is used for: <input v-model = "track" type="text" size="30">
        <input type="checkbox" id="one" value="One" v-model="deffive">
        <span v-if="deffive === true" >The different tracks that this panel is utilized in.  (IE. MDA, Child, Newborn)</span></p>
        
        <br> 
        <br>    
        <p>
          <input type="submit" value="Submit">  
        </p>    
      
    </form>
    <div>
    
    <h2>Panels</h2>
        <p v-if="!panels.length">There are no new panels yet.</p>
        <ul>
          <li v-for="panel in panels">

          <h1>{{ panel.pname }}</h1>
          <ul>
          <p>Panel Type: {{panel.ptype}}</p>
          <p>Assesment that it contributes to: {{panel.asses}} </p>
        
          <p>Actions:  {{panel.actions}} </p>
         
          <p>Responder: {{panel.responder}}</p>
          <p>Track: {{panel.track}}</p>
          </ul>
          </li>
        </ul>
    </div>
    </div>
  `,
  methods: {
    onSubmit() {
      let NewPanel= {
        ptype: this.ptype,
        asses: this.asses,
        pname: this.pname,
        actions: this.actions,
        
        responder: this.responder,
        
        track: this.track,
          
          
      }
         
      //addPanel(NewPanel),
      this.panels.push(NewPanel),
      //console.log('pname'.this.pname)
      alert("Creating the Panel")
    }
  },
  data() {
    return {
      ptype: "",
        asses: "",
        pname: "",
        actions: "",
        track: "",
        responder: "",
        defzero: "",
        defone: "",
        deftwo: "",
        defthree: "",
        deffour: "",
        deffive: '',
        panels: [],
    }
  }
  
})

Vue.component('other', {
  template: `
  <div>
  <h1>Other Info</h1>
        <p>Click on checkboxes for Definitions</p>
        <br>
  <form class="review-form" @submit.prevent="onSubmit">

  <p>What is the title of the Panel? <input v-model = "pname" type="text" size="30" required><input type="checkbox" id="one" value="One" v-model="defzero">
  <span v-if="defzero === true" > Name of panel appearing in the code and which will also be the title of the panel in the database/dashboards/analysis as well as the title of the response in the summary panel.</span></p>

  <p>What Database in the ETL layer is this going to be?<input type = "textarea" v-model = "etl">
        <input type="checkbox" id="one" value="One" v-model="defone">
        <span v-if="defone === true" >The database and location that the panel or CDE will be moved to for analysis (IE. Response, Patient, Encounter, Disease)</span></p> 

        <p>What additional information should be added to the FHIR data dictionary? <input type = "textarea" v-model = "addFHIR">
        <input type="checkbox" id="one" value="One" v-model="deftwo">
        <span v-if="deftwo === true" >Any additional FHIR codes related to the assessment, panel or clinical data element? </span></p>


        <p>What engagement is this panel going to be used in? <input type = "textarea" v-model = "enga">
        <input type="checkbox" id="one" value="One" v-model="defthree">
        <span v-if="defthree === true" >The project codes that the panel will be utilized for. (IE. HKBF, SCI BD_)</span></p> 


          <br>  
        <p>
          <input type="submit" value="Submit">  
        </p>    
    </form>
    <div>
    
    <h2>Panels</h2>
        <p v-if="!panels.length">There are no new panels yet.</p>
        <ul>
          <li v-for="panel in panels">
          <h1>{{panel.pname}} </h1>
          <ul>
          <p>Database in ETL Layer: {{panel.etl}} </p>
          <p>Additional FHIR Info: {{panel.addFHIR}}</p>
          <p>Engagement of Panel: {{panel.enga}} </p>
          
          </ul>
          </li>
        </ul>
    </div>
    </div>
   
  </div>
  `,
  methods: {
    onSubmit() {
      let NewPanel= {
          etl: this.etl,
          addFHIR: this.addFHIR,
          enga: this.enga,   
          pname: this.pname,      
          
      }
         
      //addPanel(NewPanel),
      this.panels.push(NewPanel),
      //console.log('pname'.this.pname)
      alert("Creating the Panel")
    }
  },
  data() {
    return {
      etl: "",
      addFHIR: "",
      enga: "",   
      pname: "",
      defzero: "",
      defone: "",
        deftwo: "",
        defthree: "",  
      panels: [],
    }
  }
  
})