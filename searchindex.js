Search.setIndex({docnames:["api_transforming_cohort_def","api_viewsets","built_in_processors","chiron.processors.abstract","chiron.processors.abstract.display_processor","data_dict_example","data_dict_models","data_dictionary","demo","getting_started","index","making_custom_processor","system_overview"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,sphinx:56},filenames:["api_transforming_cohort_def.rst","api_viewsets.rst","built_in_processors.rst","chiron.processors.abstract.rst","chiron.processors.abstract.display_processor.rst","data_dict_example.rst","data_dict_models.rst","data_dictionary.rst","demo.rst","getting_started.rst","index.rst","making_custom_processor.rst","system_overview.rst"],objects:{"chiron.api.serializers":{ChironUserSerializer:[1,0,1,""]},"chiron.api.utils":{cohort_def:[0,1,0,"module-6"]},"chiron.api.utils.cohort_def":{apply_transformation_add_criteria_set:[0,2,1,""],apply_transformation_add_entry:[0,2,1,""],apply_transformation_change_to_boolean_and:[0,2,1,""],apply_transformation_change_to_boolean_or:[0,2,1,""],apply_transformation_delete_criteria_set:[0,2,1,""],apply_transformation_delete_entry:[0,2,1,""],apply_transformation_delete_event_rule:[0,2,1,""],apply_transformation_sort_cd_entries:[0,2,1,""]},"chiron.api.viewsets.ChironUserViewSet":{list:[1,3,1,""]},"chiron.api.viewsets.CohortDefViewSet":{create:[1,3,1,""],list:[1,3,1,""],retrieve:[1,3,1,""]},"chiron.api.viewsets.ConceptCategoryViewSet":{list:[1,3,1,""],retrieve:[1,3,1,""]},"chiron.api.viewsets.ConceptViewSet":{list:[1,3,1,""],retrieve:[1,3,1,""],update:[1,3,1,""]},"chiron.api.viewsets.MeViewSet":{list:[1,3,1,""]},"chiron.api.viewsets.QueryToolsViewSet":{count:[1,3,1,""],export_csv:[1,3,1,""],preview:[1,3,1,""]},"chiron.api.viewsets.ReportToolsViewSet":{export_csv:[1,3,1,""],load_as_active:[1,3,1,""],preview:[1,3,1,""],share:[1,3,1,""]},"chiron.api.viewsets.ReportViewSet":{list:[1,3,1,""]},"chiron.api.viewsets.TableDefViewSet":{create:[1,3,1,""],list:[1,3,1,""],retrieve:[1,3,1,""]},"chiron.models":{AutoImportedField:[6,0,1,""],Concept:[6,0,1,"id0"],Processor:[6,0,1,""],Root:[6,0,1,""],SourceCollection:[6,0,1,""]},"chiron.models.AutoImportedField":{DoesNotExist:[6,4,1,""],MultipleObjectsReturned:[6,4,1,""],app:[6,5,1,""],associated_concept:[6,5,1,""],associated_concept_id:[6,5,1,""],field:[6,5,1,""],get_next_by_created:[6,3,1,""],get_next_by_modified:[6,3,1,""],get_previous_by_created:[6,3,1,""],get_previous_by_modified:[6,3,1,""],id:[6,5,1,""],model:[6,5,1,""],objects:[6,5,1,""]},"chiron.models.Concept":{COHORT_DEF_PROCESSOR:[6,5,1,"id2"],DISPLAY_PROCESSOR:[6,5,1,"id3"],DoesNotExist:[6,4,1,"id34"],ETL_PROCESSOR:[6,5,1,"id1"],MultipleObjectsReturned:[6,4,1,"id35"],autoimportedfield_set:[6,5,1,"id36"],category:[6,5,1,"id10"],category_id:[6,5,1,"id37"],check_permission_group:[6,3,1,"id25"],check_user_access_level:[6,3,1,"id26"],cohort_def_processor:[6,5,1,"id16"],cohort_def_processor_deid_alt:[6,5,1,"id19"],cohort_def_processor_deid_alt_id:[6,5,1,"id38"],cohort_def_processor_id:[6,5,1,"id39"],conceptprocessorargument_set:[6,5,1,"id40"],description:[6,5,1,"id7"],display_processor:[6,5,1,"id17"],display_processor_deid_alt:[6,5,1,"id20"],display_processor_deid_alt_id:[6,5,1,"id41"],display_processor_id:[6,5,1,"id42"],etl_processor:[6,5,1,"id15"],etl_processor_id:[6,5,1,"id43"],get_category_hierarchy:[6,3,1,"id22"],get_cohort_def_processor:[6,3,1,"id30"],get_cohort_def_processor_without_user:[6,3,1,"id29"],get_data_type:[6,3,1,"id33"],get_display_processor:[6,3,1,"id31"],get_etl_processor:[6,3,1,"id28"],get_full_mongo_field_name:[6,3,1,"id24"],get_name_plural:[6,3,1,"id23"],get_summary_statistics:[6,3,1,"id32"],has_phi:[6,5,1,"id18"],id:[6,5,1,"id44"],include_in_cohort_def:[6,5,1,"id13"],include_in_table_def:[6,5,1,"id14"],name:[6,5,1,"id5"],name_plural:[6,5,1,"id6"],objects:[6,5,1,"id45"],order:[6,5,1,"id11"],permanent_id:[6,5,1,"id4"],permissiongroup_allowedconcept_set:[6,5,1,"id46"],permissiongroup_set:[6,5,1,"id47"],published:[6,5,1,"id12"],references_mongo_id_field:[6,3,1,"id21"],root:[6,5,1,"id8"],root_event_date:[6,5,1,"id48"],root_event_end_date:[6,5,1,"id49"],root_event_id:[6,5,1,"id50"],root_event_name:[6,5,1,"id51"],root_id:[6,5,1,"id52"],source_collection:[6,5,1,"id9"],source_collection_id:[6,5,1,"id53"],user_can_view_concept:[6,3,1,"id27"]},"chiron.models.Processor":{DoesNotExist:[6,4,1,""],MultipleObjectsReturned:[6,4,1,""],cohort_def_for:[6,5,1,""],deid_cohort_def_for:[6,5,1,""],deid_display_for:[6,5,1,""],description:[6,5,1,""],display_for:[6,5,1,""],etl_for:[6,5,1,""],id:[6,5,1,""],instantiate:[6,3,1,""],is_cohort_def_processor:[6,5,1,""],is_custom:[6,3,1,""],is_display_processor:[6,5,1,""],is_etl_processor:[6,5,1,""],is_permission_processor:[6,5,1,""],is_source_collection_processor:[6,5,1,""],name:[6,5,1,""],objects:[6,5,1,""],optional_args:[6,5,1,""],python_path:[6,5,1,""],required_args:[6,5,1,""],sourcecollection_set:[6,5,1,""]},"chiron.models.Root":{DoesNotExist:[6,4,1,""],MultipleObjectsReturned:[6,4,1,""],check_event_permission_group:[6,3,1,""],check_event_user_access_level:[6,3,1,""],concept_set:[6,5,1,""],event_date_field:[6,5,1,""],event_date_field_id:[6,5,1,""],event_end_date_field:[6,5,1,""],event_end_date_field_id:[6,5,1,""],event_id_field:[6,5,1,""],event_id_field_id:[6,5,1,""],event_name_field:[6,5,1,""],event_name_field_id:[6,5,1,""],get_event_type:[6,3,1,""],get_mongo_subcollection_name:[6,3,1,""],get_name_plural:[6,3,1,""],get_viewable_roots:[6,3,1,""],id:[6,5,1,""],instantiate:[6,3,1,""],is_project_root:[6,5,1,""],name:[6,5,1,""],name_plural:[6,5,1,""],objects:[6,5,1,""],permanent_id:[6,5,1,""],permissiongroup_set:[6,5,1,""],root_id_is_integer:[6,5,1,""],rootprocessorargument_set:[6,5,1,""],sourcecollection_set:[6,5,1,""],user_can_view_root:[6,3,1,""]},"chiron.models.SourceCollection":{DoesNotExist:[6,4,1,""],MultipleObjectsReturned:[6,4,1,""],concept_set:[6,5,1,""],exclude_from_etl:[6,5,1,""],execution_order:[6,5,1,""],get_processor:[6,3,1,""],id:[6,5,1,""],name:[6,5,1,""],objects:[6,5,1,""],processor:[6,5,1,""],processor_id:[6,5,1,""],root:[6,5,1,""],root_id:[6,5,1,""],sourcecollectionprocessorargument_set:[6,5,1,""]},"chiron.processors":{"abstract":[3,1,0,"-"]},"chiron.processors.CohortDefBoolean":{get_cohort_def_options:[1,3,1,""],get_statistics:[1,3,1,""],validate_concept_form:[0,3,1,""]},"chiron.processors.CohortDefCategory":{get_cohort_def_options:[1,3,1,""],get_statistics:[1,3,1,""],validate_concept_form:[0,3,1,""]},"chiron.processors.CohortDefDate":{get_cohort_def_options:[1,3,1,""],get_statistics:[1,3,1,""],validate_concept_form:[0,3,1,""]},"chiron.processors.CohortDefDateDeid":{validate_concept_form:[0,3,1,""]},"chiron.processors.CohortDefNumber":{get_cohort_def_options:[1,3,1,""],get_statistics:[1,3,1,""],validate_concept_form:[0,3,1,""]},"chiron.processors.CohortDefText":{get_cohort_def_options:[1,3,1,""],get_statistics:[1,3,1,""],validate_concept_form:[0,3,1,""]},"chiron.processors.abstract":{CohortDefProcessor:[3,0,1,""],DisplayProcessor:[3,0,1,""],EtlProcessor:[3,0,1,""],SourceCollectionProcessor:[3,0,1,""],cohort_def_processor:[3,1,0,"-"],display_processor:[4,1,0,"-"],etl_processor:[3,1,0,"-"],source_collection_processor:[3,1,0,"-"]},"chiron.processors.abstract.CohortDefProcessor":{_count_null_and_missing:[11,3,1,""],_generate_cd_entry_template:[11,3,1,""],_generate_entry_id:[11,3,1,""],_get_preprocessed_data:[11,3,1,""],_preprocess_concept_form:[11,3,1,""],concept_form_callback:[3,3,1,""],concept_type:[3,5,1,""],display_cd_entry_as_html:[3,3,1,""],display_cd_entry_as_string:[3,3,1,""],generate_cohort_def_entry:[3,3,1,""],generate_concept_form:[3,3,1,""],get_concept_form:[3,3,1,""],get_mongo_filter_def:[3,3,1,""],get_mongo_match_def:[3,3,1,""],get_other_concept_search_terms:[3,3,1,""],get_statistics:[3,3,1,""],get_summary_statistics:[3,3,1,""],validate_concept_form:[3,3,1,""]},"chiron.processors.abstract.DisplayProcessor":{check_mongo_output_is_array:[3,3,1,""],get_data_type:[3,3,1,""],get_display_value:[3,3,1,""],get_header_display_value:[3,3,1,""],get_individual_display_value:[3,3,1,""],get_mongo_aggregate_def:[3,3,1,""],get_sort_field:[3,3,1,""],get_table_form:[3,3,1,""],modify_table_def_entry:[3,3,1,""],validate_table_form:[3,3,1,""]},"chiron.processors.abstract.EtlProcessor":{cast:[3,3,1,""],convert_data_list_to_set:[3,3,1,""],pull_record_data_from_source:[3,3,1,""]},"chiron.processors.abstract.SourceCollectionProcessor":{_lookup_existing_subject_id:[11,3,1,""],get_alternative_project_root_ids:[3,3,1,""],get_distinct_project_root_ids:[3,3,1,""],get_id_field_for_efficient_run:[3,3,1,""],get_project_root_id:[3,3,1,""],get_root_id:[3,3,1,""],get_source_data_collection:[3,3,1,""]},"chiron.processors.abstract.cohort_def_processor":{CohortDefProcessor:[3,0,1,""]},"chiron.processors.abstract.cohort_def_processor.CohortDefProcessor":{concept_form_callback:[3,3,1,""],concept_type:[3,5,1,""],display_cd_entry_as_html:[3,3,1,""],display_cd_entry_as_string:[3,3,1,""],generate_cohort_def_entry:[3,3,1,""],generate_concept_form:[3,3,1,""],get_concept_form:[3,3,1,""],get_mongo_filter_def:[3,3,1,""],get_mongo_match_def:[3,3,1,""],get_other_concept_search_terms:[3,3,1,""],get_statistics:[3,3,1,""],get_summary_statistics:[3,3,1,""],validate_concept_form:[3,3,1,""]},"chiron.processors.abstract.display_processor":{DisplayProcessor:[4,0,1,""]},"chiron.processors.abstract.display_processor.DisplayProcessor":{check_mongo_output_is_array:[4,3,1,""],get_data_type:[4,3,1,""],get_display_value:[4,3,1,""],get_header_display_value:[4,3,1,""],get_individual_display_value:[4,3,1,""],get_mongo_aggregate_def:[4,3,1,""],get_sort_field:[4,3,1,""],get_table_form:[4,3,1,""],modify_table_def_entry:[4,3,1,""],validate_table_form:[4,3,1,""]},"chiron.processors.abstract.etl_processor":{EtlProcessor:[3,0,1,""]},"chiron.processors.abstract.etl_processor.EtlProcessor":{cast:[3,3,1,""],convert_data_list_to_set:[3,3,1,""],pull_record_data_from_source:[3,3,1,""]},"chiron.processors.abstract.source_collection_processor":{SourceCollectionProcessor:[3,0,1,""]},"chiron.processors.abstract.source_collection_processor.SourceCollectionProcessor":{get_alternative_project_root_ids:[3,3,1,""],get_distinct_project_root_ids:[3,3,1,""],get_id_field_for_efficient_run:[3,3,1,""],get_project_root_id:[3,3,1,""],get_root_id:[3,3,1,""],get_source_data_collection:[3,3,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","module","Python module"],"2":["py","function","Python function"],"3":["py","method","Python method"],"4":["py","exception","Python exception"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:module","2":"py:function","3":"py:method","4":"py:exception","5":"py:attribute"},terms:{"000":1,"1000":1,"10000":[],"123":[7,12],"129":9,"137":9,"1977":[7,12],"255":5,"365":0,"8000":9,"abstract":[],"boolean":[1,3,4,11],"class":[1,2,3,4,5,7,10,12],"default":[0,1,3,5,9,11],"export":2,"final":[3,4,5,11],"function":[3,5,7,11,12],"import":[2,3,6,9,11],"int":1,"long":1,"new":[0,1,3,5,9,11,12],"null":[0,1,3,5,11],"public":1,"return":[0,3,4,5,6,7,11,12],"static":6,"throw":[3,4,11],"true":[0,1,3,4,5,6,11],"try":[3,4,11],For:[1,3,4,5,6,7,11,12],IDs:[1,3,5,11],Not:[],The:[0,1,2,3,4,5,7,10,11],Then:[5,7,12],There:[2,3,5,7,11,12],These:[2,11],Use:5,Used:[3,11],Useful:[3,11],Will:[1,11],__init__:11,_alt_id:[3,11],_count_null_and_miss:11,_generate_cd_entry_templ:11,_generate_entry_id:11,_get_preprocessed_data:[3,11],_id:[3,5,7,11,12],_lookup_existing_subject_id:11,_preprocess_concept_form:11,abl:9,about:[1,5,7,9,11,12],absolut:1,access:[6,9,11],accessor:6,accid:5,accomod:[],account:9,activ:1,actual:5,add:[0,3,4,11],add_criteria_set:[],add_entri:[],added:[3,11],adding:5,addit:[1,3,5,7,11,12],additional_arg:11,adjac:0,admin:9,affect:[5,7,12],after:[0,3,4,11],again:[5,6,9],aggreg:[3,4,11],ago:[0,1],ajax:[3,11],alia:[],all:[0,1,3,7,9,11,12],allow:[1,3,5,6,11],almost:5,along:[3,11],alphabet:[],alreadi:[0,1,6,7,12],also:[0,1,5,6,7,10,12],alt_id:[3,11],altern:[],although:9,altogeth:0,alwai:5,amount:5,analysi:1,ani:[0,1,3,4,5,7,11,12],anywher:[5,11],api:[0,10],api_transform:[],app:[5,6,11,12],append:[3,9,11],appli:[0,1,2,3,11],applic:10,apply_transformation_add_criteria_set:0,apply_transformation_add_entri:0,apply_transformation_change_to_boolean_and:0,apply_transformation_change_to_boolean_or:0,apply_transformation_delete_criteria_set:0,apply_transformation_delete_entri:0,apply_transformation_delete_event_rul:0,apply_transformation_sort_cd_entri:0,approach:5,appropri:[3,4,5,11],aren:6,arg:[1,6],arg_app:5,arg_gender_django_field:5,arg_model:5,arg_project_root_id:5,arg_race_django_field:5,arg_root_id:5,arg_survey_date_django_field:5,argument:[2,3,4,5,11],around:6,arrai:[0,1,3,4,5,11],as_p:9,assign:11,associ:[0,1,3,4,5,6,7,11,12],associated_concept:6,associated_concept_id:6,assum:5,asterisk:5,auth:9,authent:[],authentication_class:[],authsourc:9,auto:[3,5,6,11],autocr:[],autodetect:0,autoimportedfield:5,autoimportedfield_set:6,automat:[1,7,12],avail:1,avg:1,avoid:12,barret:[7,12],base:[1,3,4,5,6,7,9,10,11,12],basic:9,becaus:[3,4,11],becom:[3,11],been:[5,6],befor:12,begin:5,behav:[],behavior:[],being:[3,4,11],belong:1,below:6,better:[3,5,11],bin:1,blank:5,block:[3,9,11],blood:[7,12],bmi:[5,9],bool:1,booleanfield:5,both:[0,1,5,6],bracket:1,brows:10,build:[1,5,10],built:[5,6,9,10,11,12],button:9,cach:11,calcul:[1,3,10,11],call:[3,11],callback:1,callback_data:1,can:[0,1,2,3,4,5,6,7,9,10,11,12],can_view_phi:1,candid:5,cannot:[1,3,11],care:[],cascad:5,cast:[3,11],cast_to_typ:[3,11],categori:[0,1,3,11],category_hierarchi:[],category_id:6,category_processor:5,categoryfield:[],categoryseri:[],caucasian:[3,11],caus:[3,4,11],cchmc:9,cd_entri:[0,1,3,11],cd_numeric_max:0,cd_numeric_min:0,center:[7,12],chang:0,change_to_boolean_and:[],change_to_boolean_or:[],charfield:5,check:[1,6],check_event_permission_group:6,check_event_user_access_level:6,check_mongo_output_is_arrai:[3,4,11],check_permission_group:6,check_user_access_level:6,child:[1,6],child_id:0,children:6,chiron:[0,1,5,6,7,11],chiron_autocreate_dd:5,chiron_autocreate_dd_module_path:5,chiron_config:[5,11,12],chiron_glob:9,chiron_initialize_databas:9,chiron_mongo_connection_set:9,chiron_mongo_database_nam:9,chiron_run_etl:[7,12],chiron_site_titl:9,chiron_subject_id_label:9,chiron_text_field_select:0,chironus:[],chironuserseri:1,chironuserviewset:1,clean:[3,4,11],client:[3,4,11],clinic:[7,12],close:5,closest:5,code:[3,5,11],cohort:[3,5,6,10,11],cohort_auto:[],cohort_def:0,cohort_def_for:6,cohort_def_opt:1,cohort_def_processor:[5,6,11],cohort_def_processor_deid_alt:6,cohort_def_processor_deid_alt_id:6,cohort_def_processor_id:6,cohortdef:[],cohortdefboolean:[0,1],cohortdefcategori:[0,1],cohortdefd:[0,1],cohortdefdatedeid:0,cohortdefnumb:[0,1],cohortdefprocessor:3,cohortdefsnapshot:1,cohortdeftext:[0,1],cohortdefviewset:1,collect:[1,3,7,10,11,12],com:9,come:[3,4,8,9,11,12],command:[5,7,12],comment:[],complet:5,complex:[3,4,9,11],complic:[3,4,11],compon:[],concept:[0,2,3,4,7,11,12],concept__plural_nam:[],concept_descript:[],concept_form_callback:[3,11],concept_form_callback_data:[],concept_id:[0,11],concept_nam:[],concept_set:6,concept_typ:[3,11],conceptcategoryviewset:1,conceptprocessorargu:5,conceptprocessorargument_set:6,conceptseri:[],conceptviewset:1,configur:[9,10,12],connect:[5,9,12],consid:[5,7,9,12],consum:10,contain:[3,5,7,11,12],content:[9,10,12],context:9,context_processor:9,continu:9,contrib:9,control:[2,7,10,12],convert:[1,3,4,11],convert_data_list_to_set:[3,11],convert_list_to_set:[],coordin:5,core:[6,9],correspond:[3,5,7,11,12],could:[3,4,5,7,11,12],count:[3,4,11],count_missing_valu:1,count_non_nul:1,count_subjects_with_missing_valu:1,creat:[1,3,4,6,7,10,12],create_forward_many_to_many_manag:6,createsuperus:9,creator:5,credenti:9,crispy_form:9,criteria:0,csrf_token:9,csrfexemptsessionauthent:[],csv:[1,3,4,7,11,12],cue:1,curli:1,current:[1,3,4,11],custom:[2,3,4,7,9,12],dai:[0,1],dash:5,data:[1,2,3,4,9,10,11],data_definition_model:6,data_list:[3,11],databas:[3,4,5,7,11],dataset:[1,3,4,5,7,11,12],date:[0,1,5,6,7,12],date_field:[],date_rang:[0,1],datefield:5,datetim:[],datetimefield:6,days_ago:[0,1],decid:11,decim:[],decis:5,dedic:[5,12],def:[0,3,4,5,6,11],defer:6,defin:[0,2,5,6,7,12],definit:[1,3,6,10,11],definiton:[],deid:6,deid_cohort_def_for:6,deid_display_for:6,deidentifi:0,deleg:6,delet:[0,5,11],delete_criteria_set:[],delete_entri:[],delete_event_rul:[],demo:10,demograph:5,depend:[0,5,9],deprec:1,descend:1,describ:[3,4,11],descript:[1,3,6,11],desir:[0,3,11],detail:1,dev:9,develop:9,dict:[0,1,3,4,11],dictionari:[2,3,4,9,10,11],differ:[0,3,4,5,11],difficult:12,dir:5,direct:[1,5],directli:[5,9,11,12],directori:9,discuss:[7,12],displai:[1,3,4,5,11],display:[3,4,11],display_cd_entry_as_html:[3,11],display_cd_entry_as_str:[3,11],display_for:6,display_processor:[3,5,6,11],display_processor_deid_alt:6,display_processor_deid_alt_id:6,display_processor_id:6,displayprocessor:[3,4],distinct:[5,6],djagno:[],django:[1,5,6,7,12],django_field2:[],django_field3:[],django_field:5,dob:[5,7,12],doc:[3,11],docstr:[],document:[3,7,11,12],doe:[1,12],doesn:[3,4,5,7,11,12],doesnotexist:6,don:[1,3,9,11],done:[0,12],doubl:5,down:5,duplic:11,dure:[7,12],dynam:6,each:[1,5,6,7,12],edit:[0,1,3,5,9,11,12],egg:9,either:2,elem_match:[3,11],elemmatch:[3,11],elimin:0,els:[3,4,6,11],email:1,embed:[3,7,11,12],empti:[0,1],enabl:11,end:6,endblock:9,endpoint:[0,10],enter:9,entir:[3,10,11],entri:[0,1,3,4,5,11],entry_id:[0,1,3,4,6,11],environ:9,eras:1,error:[1,3,4,11],etc:[3,4,5,7,9,11,12],etl:5,etl_for:6,etl_processor:[5,6,11],etl_processor_id:6,etlprocessor:3,evalu:[],even:[5,12],event:[0,6],event_date_field:6,event_date_field_id:6,event_end_date_field:6,event_end_date_field_id:6,event_id_field:6,event_id_field_id:6,event_name_field:6,event_name_field_id:6,ever:[],everi:5,everyon:1,exactli:1,exampl:[3,4,6,7,9,11,12],except:6,exclud:0,exclude_from_etl:6,exclude_select:[0,1],execut:6,execution_ord:[5,6],exist:[0,1,3,11],existing_cd_entri:[1,3,11],existing_max:1,existing_min:1,existing_td_entri:[3,4,11],expect:[],explain:1,export_csv:[],express:[3,11],extend:[9,11],extended_cohort_def:1,extended_sort_def:1,extended_table_def:1,extern:[3,11],extra_arg:6,fail:[1,3,4,11],fals:[0,1,3,4,6,11],familiar:9,feder:9,femal:[7,12],fetch:[1,3,11],field:[1,3,4,5,6,7,10,11,12],field_machine_nam:[3,4,11],field_nam:[],file:[1,7,9,12],filter:[1,2,3,11],filter_rul:[],find:11,find_on:[3,11],finish:5,first:[0,1,5,6,9,12],first_nam:1,flatten:[3,4,11],floatfield:5,folder:[9,12],follow:[5,7,12],forc:6,forchiron_config:5,foreign:5,foreignkei:[5,6],form:[3,4,9,11],form_data:[0,3,4,11],form_error:[],form_nam:[],form_opt:[3,11],format:[3,11],former:5,forward:6,forwardmanytoonedescriptor:6,forwardonetoonedescriptor:6,found:[5,6],framework:9,free:[],freezer:5,friendli:1,from:[0,1,3,4,5,6,9,10,11,12],full:1,further:5,futur:11,gender:[5,7,12],gener:[1,3,4,5,11],generate_cohort_def_entri:[3,11],generate_concept_form:[3,11],genericviewset:[],get:[3,4,5,9,11,12],get_alternative_project_root_id:[3,11],get_category_hierarchi:6,get_cohort_def_opt:1,get_cohort_def_processor:6,get_cohort_def_processor_without_us:6,get_concept_form:[3,11],get_concept_form_data:[],get_data:[3,11],get_data_typ:[3,4,6,11],get_display_processor:6,get_display_valu:[3,4,11],get_distinct_project_root_id:[3,11],get_distinct_subject_record:[],get_etl_processor:6,get_event_typ:6,get_full_mongo_field_nam:6,get_header_display_valu:[3,4,11],get_id_field_for_efficient_run:[3,11],get_individual_display_valu:[3,4,11],get_mongo_aggregate_def:[3,4,11],get_mongo_filter_def:[3,11],get_mongo_match_def:[3,11],get_mongo_subcollection_nam:6,get_name_plur:6,get_next_by_cr:6,get_next_by_modifi:6,get_other_concept_search_term:[3,11],get_previous_by_cr:6,get_previous_by_modifi:6,get_processor:6,get_project_root_id:[3,11],get_queryset:[],get_root_id:[3,11],get_serializer_context:[],get_sort_field:[3,4,11],get_source_data_collect:[3,11],get_statist:[1,3,11],get_summary_statist:[3,6,11],get_table_form:[3,4,11],get_viewable_root:6,git:9,github:9,give:10,global:0,glucos:[7,12],good:[5,10],grab:5,great:[],greatest:1,group:[0,1,3,4,5,11],had:[7,12],handl:[3,4,11,12],harder:11,has:[3,4,5,6,7,10,11,12],has_fev:5,has_phi:6,hasconcept:[],hasuserandconcept:[],have:[0,1,3,6,7,9,11,12],here:[3,9,11],hierarchi:5,hispan:[3,11],histogram:[],histogram_data_str:1,histori:1,hoc:10,hold:5,host:9,how:[0,1,2,3,4,5,9,10],howev:[0,3,4,5,9,11],html:[3,4,9,11],http:[1,3,4,9,11],httprequest:[],human:[3,4,11],identifi:[5,10,11],ignor:[1,3,5,11],ignore_casting_error:[3,11],ignore_model_mismatch:[],impact:5,implement:[6,11],impli:1,implicitli:5,includ:[0,1,3,5,9,10,11],include_cohort_def_opt:1,include_in_cohort_def:6,include_in_table_def:6,include_null_and_miss:[0,1],include_statist:1,incom:[],incorpor:[3,4,11],index:[1,10],indic:5,info:[9,12],inform:1,initi:[5,9],input:[3,11],input_cohort_def:0,insert:1,insid:[3,9,11],instal:10,installed_app:9,instanc:[6,11],instanti:[2,6],instead:[1,5,11],instruct:9,integ:[0,1,3,4,11],interfac:[7,10,12],invalid:[3,4,11],invert:0,is_cohort_def_processor:6,is_custom:6,is_display_processor:6,is_etl_processor:6,is_integ:[],is_next:6,is_permission_processor:6,is_project_root:[5,6],is_source_collection_processor:6,isauthent:[],isn:5,issu:[3,4,11],item:6,iter:[3,5,7,11,12],its:[0,5,9],itself:[3,4,7,11,12],javascript:[3,11],js_code:[3,11],json:[1,3,11],just:[5,6,9,11],keep:[5,6,7,12],kei:[5,11],know:[5,12],kwarg:[1,3,4,6,11],lab:[7,12],lab_nam:[7,12],label:9,labtest_doc:[7,12],larg:5,larger:12,largeresultssetpagin:[],last:[0,1],last_nam:1,later:11,layout:6,ldap:9,learn:9,least:6,leav:5,len:[],let:5,level:[1,6,11],librari:12,like:[5,7,12],limit:[],line:[5,7,12],link:1,list:[0,1,3,4,7,9,11,12],littl:5,load:[3,5,6,7,11,12],load_as_act:[],local:9,localhost:9,locat:[1,7,12],log:[1,9],login:9,longer:[],longitudin:[5,10],look:[3,4,5,6,11],lookup:[1,3,11],lookup_field:[],lot:10,made:[],mai:5,main:[3,5,9,11],major:5,make:[3,4,5,9,12],manag:[2,3,4,5,6,7,9,11,12],mani:[1,5,6,7,11,12],manytomanydescriptor:6,manytomanyfield:[5,6],mark:1,match:[0,3,5,7,11,12],match_def:11,matter:5,max:1,max_batch_s:5,max_count:1,max_length:5,maximum:0,meinkejf:9,member:0,menu:6,merg:[3,4,5,10,11],messag:[1,3,4,11],metadata:[7,12],method:[1,3,4,9,11],meviewset:1,might:[3,11],migrat:9,min:1,mind:5,mine:1,minimum:[0,5],mirror:5,mise:11,miss:[1,11],mkdir:[9,11],mode:[],model:[1,7,10,11,12],model_join_path2:[],model_join_path3:[],model_join_path:[],modeltree_:5,modeltree_myapp:5,modeltree_path:5,modelviewset:[],modifi:[3,4,5,6,11],modify_table_def_entri:[3,4,11],modul:[5,10],mongo:[3,4,9,11],mongodb:[2,3,4,5,9,11],more:[3,4,9,11],most:[6,7,12],mrn:[3,11],much:12,multi:[],multipl:[0,3,4,5,7,10,11,12],multipleobjectsreturn:6,must:[0,3,4,5,9,11,12],my_items_onli:[],my_studi:5,myapp:5,myproject:[9,11],myprojectnam:9,name:[1,3,4,5,6,11],name_plur:6,namespac:9,neatli:[7,12],necessari:[3,11],need:[3,4,6,7,9,11,12],newlin:[0,1],next:[1,5],next_snapshot_id:1,non:[3,11],none:[1,3,4,6,11],normal:6,note:[1,3,4,5,7,11,12],now:[5,9],number:[0,1,3,4,5,7,11,12],numer:[],object:[3,4,6,11],objectdoesnotexist:6,oconcept:[3,4,6,11],off:5,often:[3,4,11],on_delet:5,onc:[5,11],one:[0,3,5,6,7,11,12],onli:[0,3,4,5,7,11,12],option:[0,3,4,5,9,11],optional_arg:6,order:[0,1,3,5,6,11],organ:10,origin:1,orm:[5,7,12],osourcecollect:[3,11],other:[3,5,9,11],otherwis:2,our:[5,9],ouser:[3,4,11],out:[3,5,11],output:[2,3,4,5,11],output_typ:[3,4,11],outsid:12,over:[5,10],overload:5,overrid:11,overview:[1,10],own:10,packag:[11,12],page:[1,10],page_first_index:1,page_last_index:1,page_number_curr:1,page_number_max:1,page_s:1,pagin:1,pagination_class:[],pair:[1,11],param:[],paramet:[1,3,4,11],parent:[1,3,5,6,11],particip:5,particular:[],particularli:[],pass:[0,1,2,3,5,11],password:9,path:[1,9],patient:[3,5,6,7,9,10,11,12],per:[1,5,7,12],perform:[3,4,5,11],perman:[3,4,11],permanent_id:[0,5,6],permiss:[1,10],permission_class:[],permission_group:1,permissiongroup_allowedconcept_set:6,permissiongroup_set:6,person:5,phi:6,piec:9,pip:9,pizza:6,place:[3,4,5,9,11],plu:1,plural:1,popul:[3,4,5,9,11,12],posit:5,possibl:[],post:[0,3,4,9,11],preexist:1,prefetch_rel:5,present:[2,7,10,12],prevent:11,preview:[],preview_fail:1,previou:1,previous:5,previous_snapshot_id:1,primari:[3,4,5,11],problem:[],procedur:6,processor:[5,7,9,10],processor_id:6,processor_typ:[],profici:9,project:[3,4,6,7,11,12],project_root:5,project_root_id:5,project_root_id_field:[],properli:[3,11],properti:[3,11],provid:[0,1,3,4,5,9,11,12],public_onli:1,publish:[1,6],pull:[5,7,12],pull_record_data_from_sourc:[3,11],put:[5,9,11],pymongo:12,python:[3,5,7,9,11,12],python_path:6,queri:[0,1,2,3,4,5,6,7,10,11,12],query_typ:[0,1,3,11],queryset:[6,7,12],querytoolsviewset:1,quick:9,race:5,race_nam:5,race_set__race_nam:5,random:11,rather:[3,11],raw:[3,4,11],read:[3,6,11],readabl:[3,4,11],reader:5,readi:[2,11],readonlymodelviewset:[],reason:[5,7,12],recal:5,recommend:[9,11,12],record:[1,3,5,7,11,12],record_count:1,records_per_pag:1,refer:5,referenc:[],references_mongo_id_field:6,regard:1,regardless:[1,3,4,11],registr:9,rel:1,relat:[5,6,9],related_nam:6,relationship:5,relative_to_todai:[0,1],releas:12,relev:[3,7,11,12],reload:5,remain:0,remov:[0,5],remove_empty_criteria_set:0,renam:[],render:[3,11],repeat:[],repetit:[3,11],report:10,reporttoolsviewset:1,reportviewset:1,repres:[5,6,7,12],represent:[3,4,11],request:1,requir:[5,12],required_arg:6,rerun:6,research:[5,7,9,10,12],respons:[1,3,5,11],rest_framework:[],restrict:10,result:[1,2,11],retriev:[1,3,5,11],revers:6,reversemanytoonedescriptor:6,role:5,root:[0,1,3,7,9,11,12],root_event_d:6,root_event_end_d:6,root_event_id:6,root_event_nam:6,root_id:[0,5,6],root_id_field:[],root_id_is_integ:6,rootprocessorargument_set:6,rootseri:[],round:[],rtype:[],rule:[0,3,4,5,7,11,12],run:[1,3,4,5,7,9,11,12],runserv:9,safe:5,same:[0,1,5],sampl:[3,11],satisfi:5,save:[1,3,5,11],saver:5,sc_processor:5,search:[1,3,6,10,11],searchabl:[3,11],second:[0,5],section:[1,9],see:[1,9,10],select:[0,1,3,11],select_rel:5,selected_categori:0,selected_valu:1,self:[3,4,11],send_to_etl_processor:5,separ:[0,1,5],sequenc:[],serial:1,serializer_class:[],server:9,set:[0,1,3,7,10,11,12],setup:10,share:10,shared_onli:1,should:[3,4,7,9,11,12],shouldn:11,show:5,show_all_data:1,show_concept:[],show_subcategori:[],show_unpublish:1,side:6,similar:[3,5,11],simpl:[],simpli:[1,3,4,5,7,11,12],sinc:[1,5,7,12],singl:[3,4,5,6,7,11,12],single_subject_hyperlink:1,site:9,situat:11,size:1,snapshot:1,snapshot_id:[],some:[3,4,5,11],someth:[3,5,11],somewher:12,soon:[8,12],sort:[0,1,3,4,11],sort_cd_entri:[],sort_field:1,soucecollect:[7,12],sourc:[3,7,10,11,12],source_collect:[5,6],source_collection_id:6,source_collection_processor:[],source_id:5,sourcecollect:[3,5,11],sourcecollection_set:6,sourcecollectionprocessor:3,sourcecollectionprocessorargu:5,sourcecollectionprocessorargument_set:6,specif:[1,3,5,9,10,11],specifi:[1,3,5,11],specimen:5,specimen_app:5,split:0,sqlite3:9,standalon:12,standard:[5,7,12],start:[5,6,9,12],startapp:9,startproject:9,stat:1,state:[1,2],statist:[3,11],step:[],still:[1,9],store:[1,3,4,5,7,9,11,12],str:[0,1,3,4,11],string:[0,1,3,4,5,11],structur:[3,4,5,11],studi:5,subcategori:[],subclass:6,subcollect:[7,12],subdirectori:9,subdocu:[3,11],subject:[1,5,7,9,10,11,12],subject__subject_uid:5,subject_count:1,subject_detail:1,subject_gend:5,subject_id:5,subject_rac:5,subject_root:5,subject_sc:5,subject_uid:5,submit:9,subsequ:[],success:1,successfulli:[3,4,11],summari:1,superus:9,support:[10,12],sure:[3,4,9,11],survei:[5,7,12],survey_d:5,survey_nam:5,survey_root:5,survey_sc:5,syntax:5,system:[7,9,10],tab:6,tabl:[1,3,4,5,6,11,12],table_def:[],tabledefsnapshot:1,tabledefviewset:1,tag:[3,11],take:0,td_entri:[3,4,11],tell:5,templat:9,term:[0,1,3,11],test:[7,12],text:[1,3,4,5,11],text_field:[],textfield:[],than:[3,4,11],thei:[2,5,6,7,12],them:[3,4,11],thi:[0,1,3,4,5,6,7,11,12],thing:[1,3,4,11],those:[5,6,7,9,10,12],three:[5,7,12],through:[5,7,12],time:[5,6,7,12],timestampedmodel:6,titl:9,todo:[],togeth:[3,11],too:[],tool:[5,9],top:[1,6],total:5,touch:11,track:[5,6,7,12],tranform:[],transform:[1,10],transformation_error:1,transformation_success:1,treat_string_as_sequ:[],tree:[],trickier:5,tutori:10,tweak:5,two:[0,3,5,7,11,12],txt:5,type:[0,1,3,4,5,9,11],typic:[2,3,7,11,12],undefin:[3,5,11],underscor:5,uniqu:[3,5,11],unique_pati:1,uniquepatientcount:1,univers:11,unless:[2,5],unsecur:9,until:[],updat:[1,11,12],url:[1,9],use:[1,2,3,4,5,11],used:[1,2,3,5,6,11,12],useful:[3,11],user:[0,1,3,4,6,7,9,10,11,12],user_can_view_concept:6,user_can_view_root:6,usercreatedcontentpermiss:[],usercreatedcontentseri:[],usernam:[1,9],uses:[9,12],using:[0,1,3,4,5,7,9,11,12],usual:[5,11],util:[0,3,11],val:[3,11],valid:[0,3,4,11],validate_concept_form:[0,3,11],validate_table_form:[3,4,11],valu:[0,1,3,4,5,6,9,11],varieti:[2,9,11,12],variou:[2,3,4,11],version:[9,10,12],via:6,view:[6,9],viewabl:1,viewset:[],virtual:9,visit:[7,12],visit_doc:[7,12],visual:[3,11],wai:[2,5,12],want:[3,7,9,11,12],warn:1,web:10,what:[1,5,10],when:[1,2,3,5,6,11],whenev:5,where:[3,5,11],whether:[3,4,11],which:[3,5,6,7,11,12],whichev:9,who:[1,9],whole:[3,11],why:1,wide:[9,12],wish:5,within:0,without:[1,5,11],work:[1,3,5,7,9,11,12],worri:5,would:[5,7,12],wrapper:6,write:11,year:0,yet:[5,11],you:[0,3,4,7,9,11,12],your:[1,7,10,12],yyyi:0},titles:["Transforming Cohort Definitions","API Endpoints","Built-In Processors","chiron.processors.abstract package","chiron.processors.abstract.display_processor module","Data Dictionary Setup Tutorial","Data Dictionary Model Classes","Configuring the Data Dictionary","Demo Version","Installing Chiron","Welcome to Chiron\u2019s documentation!","Creating Your Own Processors","System Overview"],titleterms:{"abstract":[3,4,11],"class":[6,11],"import":5,"return":1,The:12,add:[5,9],add_criteria_set:0,add_entri:0,addit:0,after:5,all:5,api:1,app:9,apply_transformation_add_criteria_set:[],apply_transformation_add_entri:[],apply_transformation_change_to_boolean_and:[],apply_transformation_change_to_boolean_or:[],apply_transformation_delete_criteria_set:[],apply_transformation_delete_entri:[],apply_transformation_delete_event_rul:[],apply_transformation_sort_cd_entri:[],architectur:12,argument:0,authent:9,autocr:5,autocreate_dd_config:5,autoimportedfield:6,autom:5,booleanfieldprocessor:2,built:[1,2],callback:[],categori:[5,6],category_id:1,categoryfieldprocessor:2,categoryviewset:[],chang:5,change_to_boolean_and:0,change_to_boolean_or:0,child:5,children:5,chiron:[3,4,9,10,12],chiron_us:1,chiron_user_id:1,chironus:1,chironuserviewset:[],cleanup:5,code:12,cohort:[0,1],cohort_def:1,cohort_def_processor:3,cohortdef:2,cohortdefboolean:[],cohortdefcategori:[],cohortdefd:[],cohortdefdatedeid:[],cohortdefinit:1,cohortdefnumb:[],cohortdefprocessor:11,cohortdeftext:[],cohortdefviewset:[],collect:5,concept:[1,5,6],concept_categori:1,concept_form:[],concept_id:[],conceptcategori:1,conceptcategoryviewset:[],conceptviewset:[],configur:[5,7],content:3,continu:5,count:1,creat:[5,9,11],custom:11,data:[5,6,7,12],databas:[9,12],datefieldprocessor:2,datefieldprocessordeidentifi:2,def:1,definit:0,delete_criteria_set:0,delete_entri:0,delete_event_rul:0,demo:8,dictionari:[5,6,7,12],displai:2,display_processor:4,displayprocessor:11,django:9,document:10,don:5,endpoint:1,etl:[2,7,12],etl_processor:3,etlprocessor:11,etlprocessorcount:2,etlprocessorfordict:2,etlprocessorfordictgetcount:2,etlprocessorfordjangofield:2,etlprocessorfordjangomultifieldmerg:2,exampl:5,exist:9,export_csv:1,file:5,form_data:[],get:1,has_concept:3,has_user_and_concept:3,have:5,how:[7,11,12],html:[],indic:10,instal:9,list:5,load_as_act:1,locat:5,made:5,make:11,manual:5,mark:5,meviewset:[],model:[5,6],modeltre:5,modul:[3,4],mongodb:[7,12],need:5,next:9,numberfieldprocessor:2,option:1,overview:12,own:[5,11],packag:3,permanent_id:1,post:1,preview:1,process:[7,12],processor:[0,1,2,3,4,6,11,12],project:[5,9],put:1,query_tool:1,querytool:1,querytoolsviewset:[],relat:[7,12],report:1,report_id:1,report_tool:1,reporttool:1,reporttoolsviewset:[],reportviewset:[],requir:9,rerun:5,response_typ:[],root:[5,6],rootviewset:[],set:[5,9],setup:5,share:1,should:5,snapshot_id:1,sort_cd_entri:0,sourc:5,source_collection_processor:3,sourcecollect:[2,6],sourcecollectionprocessor:11,sourcecollectionprocessorfordjangomodel:2,sourcecollectionprocessorself:2,sourcecollectionprocessorsubdoc:2,specif:0,statist:1,step:[5,9],structur:[7,12],submodul:3,system:12,tabl:[9,10],table_def:1,tabledefinit:1,tabledefviewset:[],textfieldprocessor:2,textfieldprocessorcustomsort:2,transform:0,transform_cohort_def:[],transform_cohort_def_form:[],tree:5,tutori:5,type:[],until:5,use:9,usercreatedcontentviewset:[],version:8,viewset:[],want:5,welcom:10,you:5,your:[5,9,11]}})