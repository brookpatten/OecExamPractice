<template>
  <div class="animated fadeIn">
      <b-row v-for="(acronym,index) in acronyms" :key="index">
          <b-col sm="6" lg="12">
            <b-card>
                <b-row>
                    <b-col sm="12" lg="12">
                        <h2>{{acronym.acronym}}</h2>
                    </b-col>
                </b-row>
                <b-row v-if="acronym.pronounce!=''">
                    <b-col sm="6" lg="12">
                        <em>{{acronym.pronounce}}</em>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col sm="6" lg="12">
                        {{acronym.purpose}}
                    </b-col>
                </b-row>
                <b-row v-for="(letter,lindex) in acronym.letters" :key="lindex">
                    <b-col sm="1" lg="1">
                        <em>{{letter.letter}}</em>
                    </b-col>
                    <b-col sm="5" lg="11">
                        {{letter.text}}
                    </b-col>
                </b-row>
            </b-card>
          </b-col>
      </b-row>
  </div>
</template>
<script>

export default {
  name: 'acronyms',
  components: {
  },
  props: {

  },
  computed: {
      
  },
  data: function() {
      return {
          acronyms: [
              {
                  acronym:'ABCD',
                  pronounce:'',
                  purpose:'Primary Assessment',
                  letters:[
                      {
                          letter:'A',
                          text:'Airway'
                      },
                      {
                          letter:'B',
                          text:'Breathing'
                      },
                      {
                          letter:'C',
                          text:'Circulation'
                      },
                      {
                          letter:'D',
                          text:'Disability'
                      }
                  ]
              },
              {
                  acronym:'Sample',
                  pronounce:'',
                  purpose:'Secondary Assessment',
                  letters:[
                      {
                          letter:'S',
                          text:'Signs/Symptoms'
                      },
                      {
                          letter:'A',
                          text:'Allergies'
                      },
                      {
                          letter:'M',
                          text:'Medications'
                      },
                      {
                          letter:'P',
                          text:'Past Medical History'
                      },
                      {
                          letter:'L',
                          text:'Last time eaten'
                      },
                      {
                          letter:'E',
                          text:'Events leading up to incident'
                      },
                  ]
              },
              {
                  acronym:'OPQRST',
                  pronounce:'',
                  purpose:'Pain Assessment',
                  letters:[
                      {
                          letter:'O',
                          text:'Onset'
                      },
                      {
                          letter:'P',
                          text:'Provocation / Palliation'
                      },
                      {
                          letter:'Q',
                          text:'Quality'
                      },
                      {
                          letter:'R',
                          text:'Radiation'
                      },
                      {
                          letter:'S',
                          text:'Severity'
                      },
                      {
                          letter:'T',
                          text:'Time'
                      },
                  ]
              },
              {
                  acronym:'DCAP-BTLS',
                  pronounce:'Dee Cap Bottles',
                  purpose:'',
                  letters:[
                      {
                          letter:'D',
                          text:'Deformity'
                      },
                      {
                          letter:'C',
                          text:'Contusions'
                      },
                      {
                          letter:'A',
                          text:'Abrasions/Avulsions'
                      },
                      {
                          letter:'P',
                          text:'Punctures/Penetrations'
                      },
                      {
                          letter:'B',
                          text:'Burns/Bleeding/Bruises'
                      },
                      {
                          letter:'T',
                          text:'Tenderness'
                      },
                      {
                          letter:'L',
                          text:'Lacerations'
                      },
                      {
                          letter:'S',
                          text:'Swelling'
                      },
                  ]
              },
              {
                  acronym:'PERRL',
                  pronounce:'Pearl',
                  purpose:'Pupil Assessment',
                  letters:[
                      {
                          letter:'P',
                          text:'Pupils'
                      },
                      {
                          letter:'E',
                          text:'Equal'
                      },
                      {
                          letter:'R',
                          text:'Round'
                      },
                      {
                          letter:'R',
                          text:'Reactive to'
                      },
                      {
                          letter:'L',
                          text:'Light'
                      },
                  ]
              },
              {
                  acronym:'AVPU',
                  pronounce:'Av-Poo',
                  purpose:'Disability / level of responsivness',
                  letters:[
                      {
                          letter:'A',
                          text:'Alert'
                      },
                      {
                          letter:'V',
                          text:'Verbal'
                      },
                      {
                          letter:'P',
                          text:'Pain'
                      },
                      {
                          letter:'U',
                          text:'Unresponsive'
                      }
                  ]
              },
              {
                  acronym:'SAILER',
                  pronounce:'',
                  purpose:'Radio Communication',
                  letters:[
                      {
                          letter:'S',
                          text:'Sex'
                      },
                      {
                          letter:'A',
                          text:'Age'
                      },
                      {
                          letter:'I',
                          text:'Incident'
                      },
                      {
                          letter:'L',
                          text:'Location'
                      },
                      {
                          letter:'E',
                          text:'Equipment'
                      },
                      {
                          letter:'R',
                          text:'Resources'
                      },
                  ]
              },
              {
                  acronym:'SOAP',
                  pronounce:'',
                  purpose:'Patient Care Report',
                  letters:[
                      {
                          letter:'S',
                          text:'Subjective'
                      },
                      {
                          letter:'O',
                          text:'Objective'
                      },
                      {
                          letter:'A',
                          text:'Assessment'
                      },
                      {
                          letter:'P',
                          text:'Plan'
                      }
                  ]
              },
              {
                  acronym:'CHEATED',
                  pronounce:'',
                  purpose:'Patient Care Report',
                  letters:[
                      {
                          letter:'C',
                          text:'Chief Complaint'
                      },
                      {
                          letter:'H',
                          text:'History'
                      },
                      {
                          letter:'E',
                          text:'Examination'
                      },
                      {
                          letter:'A',
                          text:'Assessment'
                      },
                      {
                          letter:'T',
                          text:'Treatment'
                      },
                      {
                          letter:'E',
                          text:'Evaluation'
                      },
                      {
                          letter:'D',
                          text:'Disposition'
                      }
                  ]
              },
              {
                  acronym:'FACTUAL-OEC',
                  pronounce:'',
                  purpose:'Patient Care Report',
                  letters:[
                      {
                          letter:'F',
                          text:'Facts'
                      },
                      {
                          letter:'A',
                          text:'Accurate'
                      },
                      {
                          letter:'C',
                          text:'Complete'
                      },
                      {
                          letter:'T',
                          text:'Terms'
                      },
                      {
                          letter:'U',
                          text:'Unbiased'
                      },
                      {
                          letter:'A',
                          text:'Avoid Slang'
                      },
                      {
                          letter:'L',
                          text:'Legible'
                      },
                      {
                          letter:'O',
                          text:'Organized'
                      },
                      {
                          letter:'E',
                          text:'Error Free'
                      },
                      {
                          letter:'C',
                          text:'Checked'
                      }
                  ]
              },
              {
                  acronym:'AEIOU-TIPS',
                  pronounce:'',
                  purpose:'Causes of altered mental status',
                  letters:[
                      {
                          letter:'A',
                          text:'Alcohol, Acidosis'
                      },
                      {
                          letter:'E',
                          text:'Epilepsy, Environment, Electrolytes'
                      },
                      {
                          letter:'I',
                          text:'Insulin'
                      },
                      {
                          letter:'O',
                          text:'Oxygen, Overdose'
                      },
                      {
                          letter:'U',
                          text:'Uremia'
                      },
                      {
                          letter:'T',
                          text:'Trauma, Tumors'
                      },
                      {
                          letter:'I',
                          text:'Infection'
                      },
                      {
                          letter:'P',
                          text:'Poisoning, Psychiatric Conditions'
                      },
                      {
                          letter:'S',
                          text:'Sezure, Stroke, Syncope'
                      }
                  ]
              },
              {
                  acronym:'HAZWOPER',
                  pronounce:'',
                  purpose:'Hazardous Materials',
                  letters:[
                      {
                          letter:'HAZ',
                          text:'Hazardous'
                      },
                      {
                          letter:'W',
                          text:'Waste'
                      },
                      {
                          letter:'OP',
                          text:'Operations and'
                      },
                      {
                          letter:'E',
                          text:'Emergency'
                      },
                      {
                          letter:'R',
                          text:'Response'
                      }
                  ]
              }
          ]
      }
  },
  methods: {
      
  },
  beforeMount () {

  },
  activated () {

  },
  mounted () {
      
  }
}
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>