<template>
  <div class="animated fadeIn">
      <b-row v-for="(list,index) in lists" :key="index">
          <b-col sm="6" lg="12">
            <b-card>
                <b-row>
                    <b-col sm="6" lg="12">
                        <vue-tree-list :model="list" v-bind:default-expanded="true">
                            <span class="icon" slot="addTreeNode"></span>
                            <span class="icon" slot="addLeafNode"></span>
                            <span class="icon" slot="editNode"></span>
                            <span class="icon" slot="delNode"></span>
                        </vue-tree-list>
                    </b-col>
                </b-row>
            </b-card>
          </b-col>
      </b-row>
  </div>
</template>
<script>
import { VueTreeList, Tree, TreeNode } from 'vue-tree-list'

export default {
  name: 'lists',
  components: {
        VueTreeList
  },
  props: {

  },
  computed: {
      
  },
  data: function() {
      return {
          lists: [
              {
                  name:'Attributes of an emergency care system',
                  children: [
                      {
                          name:'Integration of health services'
                      },
                      {
                          name:'Research'
                      },
                      {
                          name:'Legislation and regulation'
                      },
                      {
                          name:'System finance'
                      },
                      {
                          name:'Human resources'
                      },
                      {
                          name:'Medical direction'
                      },
                      {
                          name:'Education systems'
                      },
                      {
                          name:'Public education'
                      },
                      {
                          name:'Prevention'
                      },
                      {
                          name:'Public access'
                      },
                      {
                          name:'Communication systems'
                      },
                      {
                          name:'Clinical care'
                      },
                      {
                          name:'Information systems'
                      },
                      {
                          name:'Evaluation'
                      }
                  ]
              },
              {
                  name:'Nationally Recognized PreHospital Emergency Care Provider Levels',
                  children: [
                      {
                          name:'EMR - Emergency Medical Responder'
                      },
                      {
                          name:'EMT - Emergency Medical Technician'
                      },
                      {
                          name:'AEMT - Advanced Emergency Medical Technician'
                      },
                      {
                          name:'Paramedic'
                      },
                  ]
              },
              {
                  name:'Types of Consent',
                  children: [
                      {
                          name:'Expressed'
                      },
                      {
                          name:'Implied'
                      },
                      {
                          name:'Informed'
                      },
                      {
                          name:'Minor'
                      },
                  ]
              },
              {
                  name:'Mechanisms of heat exchange',
                  children: [
                      {
                          name:'Convection'
                      },
                      {
                          name:'Radiation'
                      },
                      {
                          name:'Evaporation'
                      },
                      {
                          name:'Conduction'
                      },
                  ]
              },
              {
                  name:'Methods of disease transmission',
                  children: [
                      {
                          name:'Direct Contact'
                      },
                      {
                          name:'Indirect Contact'
                      },
                      {
                          name:'Airborne'
                      },
                      {
                          name:'Ingestion'
                      },
                      {
                          name:'Vector Borne'
                      },
                  ]
              },
              {
                  name:'Incident Command System',
                  children: [
                      {
                          name:'Incident Command'
                      },
                      {
                          name:'Operations Section'
                      },
                      {
                          name:'Planning Section'
                      },
                      {
                          name:'Logistics Section'
                      },
                      {
                          name:'Finance / Administration Section'
                      },
                  ]
              },
              {
                  name:'Body Systems',
                  children: [
                      {
                          name:'Respiratory'
                      },
                      {
                          name:'Cardiovascular'
                      },
                      {
                          name:'Nervous'
                      },
                      {
                          name:'Gastrointestinal'
                      },
                      {
                          name:'Urinary'
                      },
                      {
                          name:'Endocrine'
                      },
                      {
                          name:'Integumentary'
                      },
                      {
                          name:'Skeletal'
                      },
                      {
                          name:'Muscular'
                      },
                      {
                          name:'Reproductive'
                      },
                      {
                          name:'Lymphatic'
                      }
                  ]
              },
              {
                  name:'Glasgow Coma Scale',
                  children: [
                      {
                          name:'Eyes',
                          children: [
                            {
                                name:'Open'
                            },
                            {
                                name:'Verbal Stimuli'
                            },
                            {
                                name:'Pain'
                            },
                            {
                                name:'Not'
                            },
                          ]
                      },
                      {
                          name:'Verbal',
                          children: [
                            {
                                name:'Speaks Coherently'
                            },
                            {
                                name:'Speaks Confusedly'
                            },
                            {
                                name:'Mutters words in response to pain'
                            },
                            {
                                name:'Moans in response to pain'
                            },
                            {
                                name:'No Verbal Response'
                            },
                          ]
                      },
                      {
                          name:'Motor',
                          children: [
                            {
                                name:'Follows Commands'
                            },
                            {
                                name:'Localizes Pain'
                            },
                            {
                                name:'Withdraws from pain'
                            },
                            {
                                name:'Has a flexor response'
                            },
                            {
                                name:'Has an extensor response'
                            },
                            {
                                name:'No response'
                            }
                          ]
                      },
                  ]
              },
              {
                  name:'Mandated Report Crimes',
                  children: [
                      {
                          name:'Abuse'
                      },
                      {
                          name:'Assault'
                      },
                      {
                          name:'Domestic Violence'
                      },
                      {
                          name:'Gunshot Wounds'
                      },
                      {
                          name:'Stab Wounds'
                      },
                      {
                          name:'Animal Bites'
                      },
                      {
                          name:'Communicable Diseases'
                      },
                      {
                          name:'Any Death'
                      }
                  ]
              },
              {
                  name:'Mechanisms of Injury',
                  children: [
                      {
                          name:'Blunt'
                      },
                      {
                          name:'Penetrating'
                      },
                      {
                          name:'Rotational'
                      },
                      {
                          name:'Crush'
                      },
                      {
                          name:'Blast'
                      }
                  ]
              },
              {
                  name:'Five Rights of safe medication administration',
                  children: [
                      {
                          name:'Right patient'
                      },
                      {
                          name:'Right Medication'
                      },
                      {
                          name:'Right Dose'
                      },
                      {
                          name:'Right Route'
                      },
                      {
                          name:'Right Time'
                      }
                  ]
              },
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