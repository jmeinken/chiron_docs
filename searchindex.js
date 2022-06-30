Search.setIndex({docnames:["index","topics/api","topics/api/api_transforming_analysis_def","topics/api/api_transforming_cohort_def","topics/api/api_transforming_table_def","topics/api/api_viewsets","topics/configuration","topics/configuration/built_in_concept_handlers","topics/configuration/built_in_processors","topics/configuration/chiron_settings","topics/configuration/data_dict_models","topics/configuration/making_custom_processor","topics/configuration/users","topics/data_dict","topics/system_overview","topics/version_changelog","topics/workflow","topics/workflow/deploying_to_production","topics/workflow/installing","topics/workflow/loading_data","topics/workflow/setting_up_data_dictionary"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["index.rst","topics\\api.rst","topics\\api\\api_transforming_analysis_def.rst","topics\\api\\api_transforming_cohort_def.rst","topics\\api\\api_transforming_table_def.rst","topics\\api\\api_viewsets.rst","topics\\configuration.rst","topics\\configuration\\built_in_concept_handlers.rst","topics\\configuration\\built_in_processors.rst","topics\\configuration\\chiron_settings.rst","topics\\configuration\\data_dict_models.rst","topics\\configuration\\making_custom_processor.md","topics\\configuration\\users.rst","topics\\data_dict.md","topics\\system_overview.rst","topics\\version_changelog.md","topics\\workflow.rst","topics\\workflow\\deploying_to_production.md","topics\\workflow\\installing.md","topics\\workflow\\loading_data.md","topics\\workflow\\setting_up_data_dictionary.md"],objects:{"chiron.api.serializers":[[5,0,1,"","ChironUserSerializer"]],"chiron.api.viewsets.AnalysisDefViewSet":[[5,1,1,"","create"],[5,1,1,"","list"],[5,1,1,"","retrieve"]],"chiron.api.viewsets.AnalysisToolsViewSet":[[5,1,1,"","export_csv"],[5,1,1,"","run_analysis"]],"chiron.api.viewsets.ChironUserViewSet":[[5,1,1,"","list"]],"chiron.api.viewsets.CohortDefViewSet":[[5,1,1,"","create"],[5,1,1,"","list"],[5,1,1,"","retrieve"]],"chiron.api.viewsets.CollectionViewSet":[[5,1,1,"","_get_criteria_set_event_options"],[5,1,1,"","_get_criteria_set_options"],[5,1,1,"","list"],[5,1,1,"","retrieve"]],"chiron.api.viewsets.ConceptCategoryViewSet":[[5,1,1,"","list"],[5,1,1,"","retrieve"]],"chiron.api.viewsets.ConceptViewSet":[[5,1,1,"","list"],[5,1,1,"","retrieve"],[5,1,1,"","update"]],"chiron.api.viewsets.MeViewSet":[[5,1,1,"","list"]],"chiron.api.viewsets.ProjectViewSet":[[5,1,1,"","create"],[5,1,1,"","delete"],[5,1,1,"","list"],[5,1,1,"","retrieve"],[5,1,1,"","update"]],"chiron.api.viewsets.QueryToolsViewSet":[[5,1,1,"","count"],[5,1,1,"","export_csv"],[5,1,1,"","preview"]],"chiron.api.viewsets.ReportToolsViewSet":[[5,1,1,"","export_csv"],[5,1,1,"","load_as_active"],[5,1,1,"","preview"],[5,1,1,"","share"]],"chiron.api.viewsets.ReportViewSet":[[5,1,1,"","flag"],[5,1,1,"","list"]],"chiron.api.viewsets.TableDefViewSet":[[5,1,1,"","create"],[5,1,1,"","list"],[5,1,1,"","retrieve"]],"chiron.api.viewsets.VersionViewSet":[[5,1,1,"","list"]],"chiron.chiron_settings":[[9,3,1,"","CHIRON_EXTRA_NAVBAR_ITEMS"],[9,3,1,"","CHIRON_FOOTER_TEMPLATE"],[9,3,1,"","CHIRON_INFOBAR"],[9,3,1,"","CHIRON_INFOBAR_TYPE"],[9,3,1,"","CHIRON_LOGOUT_URL"],[9,3,1,"","CHIRON_SHOW_ANALYSIS_VIEW"],[9,3,1,"","CHIRON_SITE_TITLE"]],"chiron.processors":[[8,0,1,"","CohortDefBoolean"],[8,0,1,"","CohortDefCategory"],[8,0,1,"","CohortDefDate"],[8,0,1,"","CohortDefDateDeid"],[8,0,1,"","CohortDefNumber"],[8,0,1,"","CohortDefNumberWithCategories"],[8,0,1,"","CohortDefText"],[8,0,1,"","CohortDefTextCustomSort"],[8,0,1,"","DisplayBoolean"],[8,0,1,"","DisplayCategory"],[8,0,1,"","DisplayDate"],[8,0,1,"","DisplayDateDeid"],[8,0,1,"","DisplayGeneric"],[8,0,1,"","DisplayNumber"],[8,0,1,"","DisplayNumberWithCategories"],[8,0,1,"","DisplayText"],[8,0,1,"","DisplayTextCustomSort"],[8,0,1,"","EtlDjangoField"],[8,0,1,"","EtlDjangoMultifieldMerge"],[8,0,1,"","EtlPythonDictItem"],[8,0,1,"","EtlPythonDictItemCounter"],[8,0,1,"","SourceCsv"],[8,0,1,"","SourceDjangoModel"],[8,0,1,"","SourceSelf"],[8,0,1,"","SourceSelfSubdoc"]],"chiron.processors.CohortDefBoolean":[[5,1,1,"","get_form_options"],[5,1,1,"","get_statistics"],[3,1,1,"","validate_form"]],"chiron.processors.CohortDefCategory":[[5,1,1,"","get_form_options"],[5,1,1,"","get_statistics"],[3,1,1,"","validate_form"]],"chiron.processors.CohortDefDate":[[5,1,1,"","get_form_options"],[5,1,1,"","get_statistics"],[3,1,1,"","validate_form"]],"chiron.processors.CohortDefDateDeid":[[3,1,1,"","validate_form"]],"chiron.processors.CohortDefNumber":[[5,1,1,"","get_form_options"],[5,1,1,"","get_statistics"],[3,1,1,"","validate_form"]],"chiron.processors.CohortDefNumberWithCategories":[[3,1,1,"","validate_form"]],"chiron.processors.CohortDefText":[[5,1,1,"","get_form_options"],[5,1,1,"","get_statistics"],[3,1,1,"","validate_form"]],"chiron.processors.abstract":[[11,0,1,"","CohortDefProcessor"],[11,0,1,"","CohortDefProcessorBuiltInUiMixin"],[11,0,1,"","DisplayProcessor"],[11,0,1,"","EtlProcessor"],[11,0,1,"","SourceCollectionProcessor"],[11,0,1,"","StandardLoadMixin"]],"chiron.processors.abstract.CohortDefProcessor":[[11,1,1,"","_generate_cd_entry_template"],[11,1,1,"","aggregate_stats"],[11,4,1,"","concept_type"],[11,1,1,"","display_entry_as_html"],[11,1,1,"","display_entry_as_html_abbreviated"],[11,1,1,"","display_entry_as_html_full"],[11,1,1,"","display_entry_as_string"],[11,1,1,"","form_callback"],[11,1,1,"","form_callback_streaming"],[11,1,1,"","generate_cohort_def_entry"],[11,1,1,"","get_concept_search_terms"],[11,1,1,"","get_fields_to_index"],[11,1,1,"","get_form_options"],[11,1,1,"","get_mongo_match_def"],[11,1,1,"","get_mongo_match_def_full"],[11,1,1,"","get_statistics"],[11,1,1,"","preprocess_statistics"],[11,1,1,"","validate_form"]],"chiron.processors.abstract.CohortDefProcessorBuiltInUiMixin":[[11,1,1,"","generate_concept_form"]],"chiron.processors.abstract.DisplayProcessor":[[11,1,1,"","_generate_td_entry_template"],[11,1,1,"","_get_agg_option_by_id"],[11,1,1,"","calculate_aggregate_value"],[11,1,1,"","check_requires_event_dates"],[11,1,1,"","generate_table_def_entry"],[11,1,1,"","get_data_type"],[11,1,1,"","get_default_aggregation_settings"],[11,1,1,"","get_display_value3"],[11,1,1,"","get_form_options"],[11,1,1,"","get_header_display_value"],[11,1,1,"","get_sort_key_function"],[11,1,1,"","map_to_value"],[11,1,1,"","set_aggregation_methods"],[11,1,1,"","set_display_function"],[11,1,1,"","set_map_settings"],[11,1,1,"","set_sort_keygen_function"],[11,1,1,"","set_td_entry"],[11,1,1,"","validate_form"]],"chiron.processors.abstract.EtlProcessor":[[11,1,1,"","cast"],[11,1,1,"","convert_data_list_to_set"],[11,1,1,"","pull_record_data_from_source"]],"chiron.processors.abstract.SourceCollectionProcessor":[[11,1,1,"","get_collection_id"],[11,1,1,"","get_data_last_updated_date"]],"chiron.processors.abstract.StandardLoadMixin":[[11,1,1,"","get_source_collection"],[11,1,1,"","get_subject_match_def"]],"chiron.processors.display.aggregation":[[11,0,1,"","Average"],[11,0,1,"","CountAll"],[11,0,1,"","CountDistinct"],[11,0,1,"","Earliest"],[11,0,1,"","HasValue"],[11,0,1,"","HasValueText"],[11,0,1,"","Latest"],[11,0,1,"","ListAll"],[11,0,1,"","ListDistinct"],[11,0,1,"","Max"],[11,0,1,"","MaxDate"],[11,0,1,"","Median"],[11,0,1,"","Min"],[11,0,1,"","MinDate"],[11,0,1,"","MostFrequent"],[11,0,1,"","StdDev"]],"chiron.processors.display.aggregation._base":[[11,0,1,"","AggregationMethod"]],"chiron.processors.display.aggregation._base.AggregationMethod":[[11,1,1,"","_date_to_string"],[11,1,1,"","_get_event_list"],[11,1,1,"","_get_event_list_no_nulls"],[11,1,1,"","_get_ordinal_string"],[11,1,1,"","_get_value_list"],[11,1,1,"","_get_value_list_no_nulls"],[11,1,1,"","_remove_records_with_null_values"],[11,1,1,"","check_requires_event_dates"],[11,1,1,"","get_display_value3"],[11,1,1,"","get_header_display_value"],[11,1,1,"","get_inputs"],[11,1,1,"","get_sort_key"],[11,1,1,"","get_sort_key_date"],[11,1,1,"","get_sort_key_function"],[11,1,1,"","set_custom_settings"]],chiron:[[9,2,0,"-","chiron_settings"]]},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","module","Python module"],"3":["py","data","Python data"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:module","3":"py:data","4":"py:attribute"},terms:{"0":[8,9,11,13,18],"00":8,"000":[5,8],"0th":11,"1":[5,8,9,10,12,13,16,17,20],"10":[5,8],"1000":5,"10000":8,"100000":9,"122":11,"122nd":11,"129":18,"137":18,"2":16,"213":11,"213th":11,"27":18,"2d":5,"3":[11,13,16,20],"365":3,"3rd":11,"4":[10,13,16],"5":[8,9,12],"64":17,"7":18,"8000":[1,18],"abstract":[7,8,10,13,15],"boolean":[3,5,8,11,15],"case":11,"class":[5,7,8,9,10,12,14,15,20],"default":[2,3,4,5,8,9,10,11,17,18,20],"do":[3,4,8,9,11,13,14,18],"export":[0,8],"final":11,"float":[7,8,9],"function":[1,9,11,13],"import":[0,8,10,11,13,18,20],"int":[2,5,8,9],"long":[5,8,20],"new":[2,3,4,5,11,12,14,15,18,20],"null":[3,8,10,11,15],"public":5,"return":[2,3,4,7,8,9,10,11,13,15],"switch":2,"throw":8,"true":[3,4,7,8,9,10,11,12,13,15,17,19,20],"try":17,"while":[11,17],A:[5,8,10,12,13,15,17,20],And:[7,13],As:[11,20],But:17,By:[8,11],For:[5,9,10,11,12,13,14,15,20],IF:5,IN:11,If:[3,5,8,9,10,11,12,13,15,17,19,20],In:[2,3,4,6,9,11,12,13,15,17,18,20],It:[0,5,7,8,10,11,13,14,15,20],Not:[8,10],Or:11,That:15,The:[2,3,4,5,7,8,9,10,11,12,14,15,17,19,20],Then:[9,10,11,13,20],There:[3,5,7,8,9,11,12,13,14,15,17,20],These:[8,10,11,12],To:[4,8,11,18],Will:[5,8,11],With:15,__init__:[9,11],_base:11,_date_to_str:11,_generate_cd_entry_templ:11,_generate_td_entry_templ:11,_get_agg_option_by_id:11,_get_criteria_set_event_opt:5,_get_criteria_set_opt:5,_get_event_list:11,_get_event_list_no_nul:11,_get_ordinal_str:11,_get_value_list:11,_get_value_list_no_nul:11,_id:[10,11],_remove_records_with_null_valu:11,_set:20,abbrevi:11,abl:[12,18],about:[5,8,10,11,12,13,14],abov:13,absolut:10,access:[0,7,9,10,11,13,15,17,18],access_level:[5,9,12],accid:20,accord:19,account:[9,11,17,18],achiev:15,across:13,activ:[5,9,10,12],actual:[11,12,15,20],ad:[11,12,15,20],add:[2,3,4,5,10,11,15,20],add_entri:15,add_id:11,add_or_remov:5,addit:[8,9,11,15,20],addition:12,additional_arg:11,adjac:3,admin:[5,18],advanc:14,advantag:[17,20],affect:[4,8,11,15],after:[0,3,8,11],ag:9,again:[10,11,13,18,20],age_in_dai:9,age_in_year:9,agg:[9,12],aggreg:[4,8,9,10,11,12,13,15],aggregate_stat:11,aggregation_criteria_set:15,aggregation_method:[4,15],aggregation_set:11,aggregation_styl:15,ago:[3,5],ahead:[],ajax:11,ajax_select:11,alia:15,all:[0,1,3,5,7,8,9,10,11,12,13,14,15,17,18,20],allow:[0,1,5,7,9,10,11,12,13,15,17],allow_all_subjects_overrid:12,allowed_collect:12,allowed_concept:12,allowed_data_categori:12,along:[10,15],alphabet:8,alphanumer:10,alreadi:[3,5,8,10,11,14,15,20],also:[3,4,5,7,8,9,10,11,12,13,14,15,17,19,20],altern:[7,8,10,13],although:18,altogeth:3,alwai:[10,13,19],amount:[9,13],an:[0,2,3,4,5,7,8,9,10,11,13,15,19],analysi:[1,5,9,10,15],analysis_def:[2,15],analysis_tool:15,analysisdefsnapshot:5,analysisdefviewset:5,analysistoolsviewset:5,ani:[3,5,9,10,11,12,13,14,15,17,19,20],anoth:[2,10,11,20],anyth:[9,10,15,20],anytim:19,anywher:11,api:[0,2,3,4,11,15],app:[8,10,11,14,20],append:[2,4,11,18],appli:[2,3,4,5,8,9,10,11,12,13],applic:0,apply_transformation_add_categori:4,apply_transformation_add_criteria_set:3,apply_transformation_add_criteria_set_count_rul:3,apply_transformation_add_entri:[2,3,4],apply_transformation_add_sort_entri:4,apply_transformation_bulk_add_entri:4,apply_transformation_change_to_boolean_and:3,apply_transformation_change_to_boolean_or:3,apply_transformation_clear_al:[2,3],apply_transformation_clear_sort_entri:4,apply_transformation_create_event_rul:3,apply_transformation_delete_criteria_set:3,apply_transformation_delete_entri:[2,3,4],apply_transformation_delete_event_rul:3,apply_transformation_modify_event_rul:3,apply_transformation_move_entri:2,apply_transformation_resort_column:4,apply_transformation_sort_cd_entri:3,apply_transformation_swap_rows_and_col:2,appropri:10,ar:[1,3,4,5,7,8,9,10,11,12,13,14,15,17,20],archiv:11,aren:12,arg:[5,8,10,12],argument:[7,8,9,10,11,13,15],around:[7,13],arrai:[3,4,5,10],artifici:0,as_p:18,associ:[3,5,7,8,9,10,11,12,13,15,20],associated_concept:10,assum:[15,20],auth:18,authsourc:18,auto:[11,15],autocomplet:20,autocr:[9,10,15],autocreate_source_list:[9,20],autocreate_tool:20,autocreatedfield:20,autodetect:3,autogener:20,autoimportedfield:20,automat:[5,9,10,11,12,13,15,17,20],avail:[1,5,11],avoid:14,back:9,bar:9,base:[5,7,8,12,13,18],basic:[14,18],batch:[],batchloadmixin:[],becaus:[7,11,13,17],becom:11,been:[8,10,11,15,20],befor:[10,14],behav:8,behavior:[7,8,11,13,17],being:[0,10,11,13],belong:[5,12,15],below:9,besid:10,beta:15,better:11,between:[9,10,13,15],beyond:11,biospecimen:13,birthdat:13,blank:[3,4],blinded_id:10,block:[11,12,18],blue:9,bmi:18,bool:[3,5,20],boost:10,both:[3,5,8,12],brows:[0,1,13],browser:1,bucket:13,build:[0,5,10,11,13],built:[0,1,6,9,11,12,13,14,18],built_in_ui_mixin:8,bundl:[7,13,15],button:18,c:9,cach:[5,11,15],cacul:11,calcul:[0,5,8,11,15],calculate_aggregate_valu:11,call:[7,10,11,13,20],callback:[5,11],callback_data:5,can:[1,2,3,4,5,7,8,9,10,11,12,13,14,15,17,18,19,20],can_view_subject_detail:12,can_view_workspac:12,cannot:[5,11,12],care:8,carri:13,cast:11,cast_to_typ:[8,11],categor:11,categori:[3,4,5,7,8,11,12,13,15,20],category_id:4,categoryfield:8,caucasian:11,caus:9,cchmc:18,cd:[5,11,18],cd_entri:[3,5,11],cd_numeric_max:3,cd_numeric_min:3,cell:11,certain:17,chang:[2,3,4,7,10,11,13,15,17],changelog:0,check:[5,11,15,20],check_requires_event_d:11,child:[5,11],child_id:3,chiron:[2,3,4,5,7,8,10,11,12,13,14,15,16,17,20],chiron_agg_subject_count_min_limit:[9,12],chiron_autocreate_dd:[10,20],chiron_autocreate_source_list:[9,20],chiron_autocreate_users_from_django_us:[9,12],chiron_autocreated_users_can_view_subject_detail:[9,12],chiron_autocreated_users_can_view_workspac:[9,12],chiron_backup_dd:[9,17],chiron_config:[9,11,17,20],chiron_create_index:17,chiron_data_dict_fixture_path:[9,17],chiron_data_summary_function_path:9,chiron_default_access_level:[9,12],chiron_drop_index:17,chiron_event_concept_typ:9,chiron_extra_navbar_item:9,chiron_footer_templ:9,chiron_glob:18,chiron_infobar:9,chiron_infobar_typ:9,chiron_logout_url:9,chiron_mongo_connection_set:[9,18],chiron_mongo_database_name_overrid:[9,10],chiron_print_query_info:9,chiron_processor_modul:[9,11],chiron_restore_dd:[9,17],chiron_run_etl:[9,17,19],chiron_set:9,chiron_show_analysis_view:9,chiron_site_titl:[9,18],chiron_source_data_directori:[9,20],chiron_text_field_select:3,chiron_us:17,chiron_use_cach:9,chiron_use_staging_during_etl:[9,17],chiron_view_index:17,chironus:[2,3,4,7,8,9,11,15],chironuserseri:5,chironuserviewset:5,clean:[3,11],clear:4,client:[3,11],code:[11,13,17],codebas:14,cohort:[0,1,8,9,10,11,12,13,15],cohort_def:[3,8,10,15],cohort_def_entry_id:[5,15],cohort_def_opt:5,cohort_def_processor:[8,10,11],cohort_def_processor_deid_alt:[8,10,12],cohortdef:[7,10,13],cohortdefboolean:[3,5],cohortdefcategori:[3,5],cohortdefd:[3,5],cohortdefdatedeid:3,cohortdefnumb:[3,5],cohortdefnumberwithcategori:3,cohortdefprocessor:[8,15],cohortdefprocessorbuiltinuimixin:8,cohortdefsnapshot:5,cohortdeftext:[3,5],cohortdefviewset:5,col:2,collect:[0,3,7,8,9,11,12,13,15,19,20],collection_id:[3,8],collection_id_field:[8,20],collection_id_is_integ:10,collectionrelationship:[13,15],collectionviewset:5,color:9,column:[2,4,11,15],column_index:11,com:18,combin:10,come:[10,12,13,15,18,20],comma:[8,10],command:[9,11,17,19],comment:[8,10,11,12],common:13,comparison:9,complet:[9,17,20],complex:[7,11,13,18],compon:8,concept:[2,3,4,6,8,9,12,15,17,20],concept_for_allowed_subject:12,concept_for_prefilt:10,concept_handl:[7,10,11],concept_id:[2,3,4,11],concept_id_list:4,concept_typ:[5,11],conceptcategoryviewset:5,concepthandl:[7,13,15],conceptviewset:5,confid:10,configur:[0,5,11,17,18,20],confirm:5,connect:[9,14,19],consid:[8,18],consum:13,contain:[10,11,12,13],content:[9,14,18],contentflag:[5,15],context:[5,18],context_processor:18,continu:[17,20],contrib:18,control:[0,8,11,12,13],convert:11,convert_data_list_to_set:11,convert_list_to_set:8,core:[9,10,13,18],correct:[4,11],correctli:[19,20],correspond:[10,11,13],could:[10,11,13,20],count:[0,3,9,11,12],count_al:11,count_distinct:11,creat:[0,2,3,5,7,9,10,12,13,14,15,17],createsuperus:18,credenti:18,crispy_form:18,criteria:[3,5,12,15],criteria_set_entry_id:5,criteria_set_event_opt:5,criteria_set_nam:15,criteria_set_opt:5,cross:20,csrf_token:18,csv:[5,8,13],csv_autocr:20,cue:5,current:[4,5,10,17,20],current_pag:5,custom:[6,7,8,9,10,13,14,15,18,20],custor:11,dai:[3,5,9,10],danger:9,dash:10,data:[0,3,6,7,8,12,14,15,16,18],data_list:11,data_typ:10,databas:[8,10,13,15,19],dataset:[0,5,7,9,11,13,14,15,19,20],date:[3,5,7,8,9,10,11,13,15],date_rang:[3,5],datefieldprocessor:8,datetim:[8,11],days_ago:[3,5],dd:3,dealt:11,debug:9,decid:[5,11],decim:8,dedic:[14,20],def:[3,8,10,11,13,15],def_compon:2,default_set_for_new_autocreated_us:12,defin:[0,2,3,4,8,9,10,11,12,13,15,19,20],definit:[1,5,9,10,11,15],deid:[9,12],deidentif:[7,13],deidentifi:[3,8,15],delet:[2,3,4,9,10,17,20],demo:0,demograph:20,demographics_set:20,deographics_set__rac:20,depend:[1,3,8,10,11,18],deploi:16,deploy:[0,9],deprec:10,descend:5,describ:11,descript:[5,10,11,12],desir:[3,9,11],detail:[0,5,9,10,11,12,15,17],determin:[5,11],dev:18,develop:[9,15,17,18],deviat:11,diagnosi:[10,20],dict:[2,3,4,5,8,9,11,20],dict_concept_handl:7,dictbooleanhandl:7,dictcategoryhandl:[7,11],dictdatehandl:[7,11],dictfloathandl:[7,11],dictfloatwithcategorieshandl:7,dictintegerhandl:[7,11],dictintegerwithcategorieshandl:7,dictionari:[0,6,8,14,15,16,19],dictsubjecthyperlinkhandl:7,dicttexthandl:[7,11],didn:15,differ:[3,7,8,9,11,12,13,20],difficult:14,direct:5,directli:[0,1,5,11,13,14,15,18],directori:[9,18],disallowed_reason:5,displai:[5,7,9,10,12,13],display:11,display_entry_as_html:11,display_entry_as_html_abbrevi:11,display_entry_as_html_ful:11,display_entry_as_str:11,display_nam:7,display_processor:[8,10,11],display_processor_deid_alt:[8,10,12],display_processor_display_func:11,display_processor_sort_value_func:11,displayprocessor:[8,15],distinct:[8,11,13],django:[1,5,8,9,10,12,13,14,15,17,19],django_autocr:20,django_concept_handl:7,django_field2:8,django_field3:8,django_field:8,djangobooleanhandl:7,djangocategoryhandl:7,djangodatehandl:7,djangofloathandl:7,djangofloatwithcategorieshandl:7,djangointegerhandl:7,djangointegerwithcategorieshandl:7,djangorestframework:1,djangosubjecthyperlinkhandl:7,djangotexthandl:7,doc:8,document:[8,17,20],doe:[0,5,8,11,14,15],doesn:[10,17,19,20],doesnotexist:10,don:[5,8,11,12,13,18,20],done:[2,3,4,11],doubl:20,drop:17,dummi:[9,15],duplic:11,dure:[0,8,9,10,11,13,15,17],e:[5,11,20],each:[0,8,9,10,11,12,13,15,17,19,20],edit:[2,3,4,5,10,11,14,15,18],effect:[4,10,11,12,13],effici:[],egg:18,ehr:0,either:[1,8,11,12,15,20],elem_match:11,elemmatch:11,elimin:3,elt:[7,13],email:5,embed:[11,14],empti:[2,3,5,10,12],enabl:13,encount:[10,13,20],end:[2,9,10,11],endblock:18,endpoint:[1,2,3,4,15],engin:[9,15],ensur:9,enter:[10,18],entir:[8,11],entri:[2,3,4,5,10,11,12,15,20],entry_alia:15,entry_id:[2,3,4,5,11,15],environ:[9,15,17,18],eras:[5,19],error:[3,5,8,11,17],escap:11,etc:[0,8,11,18],etl:[9,10,11,17],etl_processor:[8,10,11],etlprocessor:8,etlprocessorfordjangofield:8,evalu:8,even:[3,14,20],event:[3,5,9,10,11,15],event_date_field:[9,10,11],event_end_date_field:[9,10],event_id:15,event_id_field:10,event_name_field:10,ever:8,everi:[10,11,12,13],everyon:5,everyth:[15,17,19],ex:[9,10,11,18,20],exactli:[3,5,15],exampl:[9,10,11,12,13,18,20],except:[8,10,15],exclud:3,exclude_from_aggreg:[10,12],exclude_from_etl:[10,19],exclude_select:[3,5,15],execut:[8,11],execution_ord:[10,19],exist:[0,2,3,4,5,8,9,10,11,12,19],existing_cd_entri:[5,11],existing_max:5,existing_min:5,expect:20,explain:5,explan:15,explicitli:20,explor:0,extend:[11,15,18],extended_analysis_def:5,extended_cohort_def:5,extended_table_def:5,fail:[3,5,8,11],fals:[3,4,5,7,8,9,11,12,15,20],familiar:[13,18],featur:[0,15],feder:18,fetch:[5,8,10,13],few:17,field:[0,3,4,5,8,9,10,11,12,14,17,19,20],field_nam:8,file:[0,5,8,13,14,15,17,18],filenam:20,filepath:[8,20],filter:[5,8,10],filter_rul:8,finish:17,first:[3,5,9,10,11,14,17,18,20],first_index:5,first_nam:5,fixtur:[9,17],fk_concept:10,flag:[10,12,13,15],flag_typ:5,flag_type_star:5,focu:0,folder:18,follow:[17,20],footer:9,forc:8,foreign:[10,20],foreignkei:20,form:[3,11,15,18],form_callback:11,form_callback_stream:11,form_data:[3,11],form_html_templ:11,form_js_templ:11,form_opt:11,format:[5,11],foundat:10,four:8,framework:18,free:8,frequent:11,friendli:5,from:[0,2,3,4,5,8,9,10,11,12,13,15,17,18,19,20],full:[5,8,10,11,15,20],fulli:[10,19],further:20,futur:[10,11],gender:13,gener:[3,5,8,11,13,15,20],generate_cohort_def_entri:11,generate_concept_form:11,generate_table_def_entri:11,get:[0,8,9,10,13,14,15,18,20],get_actual_mongo_database_nam:10,get_collection_id:11,get_concept_search_term:11,get_data:11,get_data_last_updated_d:11,get_data_summary_str:9,get_data_typ:11,get_default_aggregation_set:11,get_display_valu:11,get_display_value3:11,get_fields_to_index:11,get_form_opt:[5,11],get_header_display_valu:11,get_individual_display_valu:11,get_input:11,get_mongo_match_def:11,get_mongo_match_def_ful:11,get_relationships_as_fk:10,get_relationships_as_pk:10,get_sort_kei:11,get_sort_key_d:11,get_sort_key_funct:11,get_source_collect:11,get_source_collection_batch:[],get_statist:[5,11],get_subject_match_def:11,git:18,github:18,give:[10,11,12,15,20],given:12,global:[3,6,14,17],go:[11,18],goal:20,good:[8,19],grant:12,great:8,group:[3,5,10,11,15],guid:19,h2:18,ha:[0,1,4,8,9,10,11,12,13,15,19,20],had:[11,15],half:17,hand:20,handl:[10,11,14],handler:[6,10,15],harder:11,has_ev:15,has_phi:[8,10,12],has_valu:11,has_value_text:11,hasn:11,have:[3,5,8,9,10,11,12,13,14,15,18,19,20],header:[8,11,15,20],help:[8,9,13,15,17],here:[9,11,13,14,18,20],hidden:[12,13],hide:[10,11,12],hierarch:13,highest:10,hispan:11,histogram:8,histogram_data:15,histogram_data_str:15,histori:5,hit:17,home:9,hopefulli:11,host:[9,18],how:[1,2,3,4,5,8,10,11,13,18],howev:[1,3,9,10,11,18],html:[5,9,11,18],http:[1,3,5,11,18],httpstream:11,human:[0,11,18],hyperlink:7,i:[5,11,18,20],id:[3,4,5,8,9,10,11,17,18,20],identifi:[10,11,15,20],if_no_match:11,ignor:[5,11,12,20],ignore_casting_error:[8,11],ignore_model_mismatch:8,ignore_warn:3,implement:[5,10,11],impli:5,improv:[9,15],includ:[3,5,9,10,11,12,15,18],include_cohort_def_opt:5,include_in_analysis_def:10,include_in_cohort_def:10,include_in_table_def:10,include_null_and_miss:[3,5],include_related_subdoc:8,include_statist:5,include_table_def_opt:[5,15],incom:3,incorpor:11,index:[0,2,5,10,11],indic:9,indirect:12,individu:13,info:[3,9,10,12,14],infobar:9,inform:5,init:11,initi:10,input:[8,11,15],input_analysis_def:2,input_cohort_def:3,input_data:11,input_table_def:4,insid:[10,11,18],inspect:20,instal:16,installed_app:18,instanc:[11,13,14,15,20],instanti:[8,10],instead:[5,8,11,15,20],instruct:18,integ:[3,5,7,8,11],integr:[0,1],intention:20,interact:[11,12,13],interest:15,interfac:[0,1,8,13],invert:3,is_cohort_def_processor:10,is_display_processor:10,is_etl_processor:10,is_integ:8,is_permission_processor:10,is_root_collect:13,is_source_collection_processor:10,is_staff:5,isn:20,item:[8,10,20],iter:[11,13,20],its:[3,9,10,11,13,14,18,20],itself:[8,11],join:20,join_model:20,join_path:20,json:[5,8,9,11,15,17],just:[5,11,18],keep:[10,15,20],kei:[5,8,9,10,11,20],kept:9,know:14,kwarg:[5,7,8,10,11,12],lab:10,lab_event_nam:15,label:[11,18],larger:14,last:[3,5,11],last_index:5,last_nam:5,last_pag:5,later:[8,11],latest:15,layer:[7,10,13],ldap:18,least:[3,12],leav:[10,12,17],left:17,len:8,length:8,less:[9,12],level:[5,9,10,11,13,15],librari:14,light:[7,13],like:[8,10,11,13,15,20],limit:[8,12,15,17,20],line:8,link:[5,9,13],list:[3,4,5,8,9,10,11,12,15,18],list_al:11,list_distinct:11,liter:13,live:[0,11],ll:[11,15],load:[8,9,10,11,13,16,17,20],load_to_root:20,local:18,localhost:[1,9,18],locat:[8,17],log:[5,18],logic:[7,10,13,20],login:18,logout:9,longer:[8,10,15],longitudin:[0,10],look:11,lookup:[11,20],lot:[13,15,17,20],lower:10,lowest:10,m2m:11,made:14,mai:[11,12],main:[10,18,20],maintain:13,major:15,make:[7,11,13,14,18,20],make_ordin:11,manag:[1,8,9,10,11,12,13,17,18,19,20],mani:[5,8,10,11,13,14,15,20],manipul:5,manual:[10,15],map:11,map_to_valu:11,match:[3,10,11,15],match_def:11,match_rul:11,matter:10,max:5,max_batch_s:8,max_cached_subject_id:9,max_dat:11,maximim:11,maximum:[3,8,9,11],medic:13,meinkejf:18,meinken:9,member:3,menu:10,merg:[0,11,15],messag:[3,5,11],metadata:13,method:[4,5,11,15,18],meviewset:5,might:[9,10,11,12],migrat:[15,18],min:5,min_dat:11,mine:5,minimum:[3,9,11,12],miniumum:11,minor:15,mixin:11,mkdir:18,mm:3,model:[5,8,9,11,14,15,17,19],model_join_path2:8,model_join_path3:8,model_join_path:8,modeltre:15,modif:14,modifi:[0,3,5,9,13,15,20],modul:[0,9,11],mongo:[8,10,11,18],mongo_database_nam:[9,10],mongodb:[8,9,10,11,12,14,15,16,18],more:[9,10,12,14,17,18],most:[3,11,13,15,17],most_frequ:11,move:2,mrn:10,much:[14,20],multi:8,multipl:[0,3,4,8,10,11,13,15,19,20],multipleobjectsreturn:10,must:[3,9,10,11,12,14,18,20],my:8,my_source_collection_id:19,my_source_list:20,mycustomhandl:11,myhandlerclass:10,myprocessorclass:10,myproject:18,mysourceprocessor:11,n:11,name:[5,8,9,10,11,12,15,19,20],name_plur:10,namespac:18,navbar:9,navig:1,necessari:11,need:[3,5,8,9,10,11,12,13,14,15,17,18,20],newlin:[3,5],next:[5,11],next_pag:5,next_snapshot_id:5,nightli:0,non:[10,11],none:[2,4,5,7,8,9,11,20],normal:[8,9,11],notat:20,note:[5,8,11,12,15,17,20],notif:9,now:[11,15,18],num:8,number:[3,5,7,8,9,10,11,12,13,15],numberfieldprocessor:8,numer:[8,11],object:[8,9,10,11],occur:[9,11],oconcept:[8,11],odataset:[8,11],off:[10,15],old:9,onc:[8,10,11,12,17,19,20],one:[2,3,8,10,11,12,13,15,19,20],ones:[12,15],onli:[0,3,8,9,10,11,12,13,15,17,20],oper:12,option:[3,8,9,10,11,12,15,17,18,19,20],option_typ:3,optional_arg:10,options_callback:11,orang:9,order:[3,4,5,8,10,11,19],ordin:11,organ:10,origin:[5,17],orm:[10,13,20],os:18,osourcecollect:[8,11],other:[3,5,8,9,10,11,12,13,18,20],otherwis:[10,11,12,20],our:18,out:[11,13],output:[5,8,10,11],output_typ:[5,11],outsid:14,over:[0,10],overhaul:15,overrid:[5,8,11],overview:[0,5,13],own:[1,9,10,11,13,14,15,20],packag:11,page:[0,5,9],page_first_index:5,page_last_index:5,page_number_curr:5,page_number_max:5,page_s:5,pagin:5,pair:[5,11],paramet:[3,5,8,10,11,15],parent:[5,10,11,12],part:10,partial:19,particular:9,pass:[3,5,8,9,10,11,15],password:18,path:[8,9,10,11,18,20],patient:[0,9,10,11,12,13,14,17,18,20],patient__patient_id:20,peopl:10,per:[5,13,17,20],perfect:20,perform:[10,14,15],period:0,perman:20,permanent_id:[2,3,4,10,15],permiss:[5,6,10,13,15],permission_group:[5,12],phi:[8,9,10,12,15],pip:18,pivot:15,pk:[5,8],pk_concept:10,place:[8,9,10,17],plai:10,plu:5,plural:5,point:[7,15,20],popul:[3,11,14],posit:[2,4,11],possibl:[8,9],post:[2,3,4,11,15,18],power:13,pre:8,preexist:5,prefetch_rel:8,prefilt:10,prefilter_mod:10,prefilter_valu:[3,7],prepend:[4,9],prepend_valu:11,preprocess:11,preprocess_statist:[5,11],present:[8,14],preview_fail:5,previou:[5,10],previous:20,previous_pag:5,previous_snapshot_id:5,primari:[8,10,20],print:[9,17],probabl:1,problem:9,procedur:13,process:[9,11,17,19],processor:[6,7,9,12,14,15,18],processorregistri:[10,11],product:[10,15,16,19],profici:18,project:[10,11,12,14,15],projectviewset:5,prompt:19,properli:11,properti:[11,15],provid:[2,3,4,5,7,8,10,11,12,13,15,18,20],public_onli:5,publish:[5,10],pull:[8,14,15],pull_record_data_from_sourc:11,put:[11,15,18],py:[1,9,10,11,17,18,19,20],pymongo:[9,14,15],python:[1,7,8,9,10,11,13,15,17,18,19,20],python_path:10,queri:[3,5,8,9,10,11,12,13,14,15],query_tool:15,query_typ:[3,5],queryset:7,querytoolsviewset:5,questionnair:20,quick:[18,19],quickli:20,race:20,racelookup:20,random:20,rather:[11,12],re:[9,10,13,18,20],read:[0,8,11],readabl:11,readi:[8,20],recent:11,recommend:[9,11,15,18,19],record:[4,5,7,8,9,10,11,13,20],record_count:5,records_per_pag:5,red:9,ref:11,refer:10,referenc:10,regard:5,regardless:[5,12],regist:[9,10,15],registr:[11,18],registration2:[],registri:9,rel:20,relat:[10,14,18,20],relationship:[10,11,12,13,15,20],relative_to_todai:[3,5],releas:14,relev:[11,12],reload:[19,20],remain:[3,17],remov:[2,3,4,5,10,11,15,20],remove_empty_criteria_set:3,renam:[15,17],render:11,reorgan:[0,15],repeat:[8,11],repeatedli:11,repetit:11,replac:[9,17],repopul:9,report:[0,8,10,11,12,13,15],report_id:15,reporttoolsviewset:5,reportviewset:5,repres:[5,10,13],represent:11,request:[5,9,11],requir:[5,8,10,11,14,20],required_arg:10,rerun:10,research:[0,13,14,18],reset:4,respons:[5,11],restor:[9,17],restrict:12,result:[3,4,5,8,10,11,12,15],retriev:[5,8,11,13],revers:[4,11],review:15,risk:11,role:[2,10],root:[1,8,10,11,13,18,20],root_collect:10,root_collection_id:8,root_collection_id_field:8,round:8,row:[2,4,8,13,20],rule:[3,5,8,11,15],rule_count:3,rule_oper:3,run:[5,8,9,11,15,17,18,19],runserv:[1,18],s:[5,9,10,11,12,13,17,19,20],safe:20,same:[2,3,4,5,8,9,10,11,15,20],sampl:[10,11,13],sanit:11,save:[0,3,5,9,10,11,17],schema:15,scratch:19,search:[0,5,11],searchabl:11,second:3,section:[5,9,12],secur:11,see:[5,8,9,11,12,15,17,18,20],select:[3,4,5,8,10,11,19],select_rel:8,selected_categori:3,selected_valu:5,self:[3,10,11],semicolon:11,sens:13,separ:[3,5,8,9,10,11,12,13,17,20],sequenc:8,serial:5,server:[1,18],set:[1,3,4,5,6,8,10,11,12,14,15,16,19],set_aggregation_method:11,set_alt_id_nam:8,set_cohort_def_processor:7,set_criteria_set_alia:15,set_custom_set:11,set_deid_cohort_def_processor:7,set_deid_display_processor:7,set_display_funct:11,set_display_processor:7,set_etl_processor:[7,11],set_kwarg_opt:7,set_map_set:11,set_sort_keygen_funct:11,set_td_entri:11,setup:20,shard:17,share:[0,10],shared_onli:5,shorthand:11,should:[5,8,9,10,11,12,13,14,15,18,20],shouldn:[5,8,10,11,12],show:[9,10,12,13,19],show_all_data:5,show_unpublish:5,shown:[9,12],side:10,sign:9,similar:11,similarli:[8,15],simpl:[11,13],simpler:[7,13],simpli:[5,12],simplifi:13,sinc:[5,9],singl:[0,7,8,10,11,12,13,15,19,20],site:[0,1,9,18],situat:8,size:5,skip:[10,11,19],small:[9,10,15],snapshot:[0,5,15],so:[5,10,11,12,14,18,19,20],solut:11,some:[11,12,15],someth:[9,11,20],sometim:[10,11],sort:[3,4,5,8,10,11,13],sort_field:5,sourc:[0,7,8,9,10,11,13,15,19],source_collect:10,source_collection_processor:8,source_list:[],source_nam:20,sourcecollect:[11,13,19],sourcecollectionprocessor:8,sourcedjangomodel:11,sourceself:11,sourceselfsubdoc:11,specfi:20,special:[11,12],specif:[5,8,9,10,11,12,13,14,15,17,18],specifi:[5,10,11,13,15,17,20],speed:[10,17],split:3,sqlite3:18,stack:4,stage:9,standalon:14,standard:[8,11,13],standardloadmixin:8,star:15,start:[1,9,10,13,14,18,20],startapp:18,startproject:18,stat:[5,9,11],state:5,statement:9,statist:[8,11,13,15],std_dev:11,stdout:9,step:[9,10],still:[5,9,10],store:[8,9,10,11,13,14,18,20],str:[2,3,4,5,8,11,20],stream:11,string:[3,5,8,9,10,11,15],string_val_separ:8,strong:0,structur:[13,15,20],studi:[10,12],style:15,sub:13,subclass:[8,11],subcollect:[10,11,13,15],subdirectori:18,subdoc:8,subdocu:[8,11],subject:[0,5,7,9,10,11,12,13,15,18,20],subject_count:5,subject_id_field:20,subject_id_fields_to_index:10,subject_match_def:[],subjectdemograph:13,submiss:11,submit:[4,18],subsequ:[],substitut:9,success:[5,9],successfulli:[11,17],sudocu:8,suffix:20,summari:[8,13],superus:18,support:[13,14,20],sure:18,synthea:0,system1:20,system1_source_list:20,system2:20,system2_source_list:20,system:[0,9,10,12,17,18,19,20],t:[5,8,10,11,12,13,15,17,18,19,20],tabl:[1,2,5,9,10,11,12,13,14,15,19,20],table_def:[4,11,15],table_def_entri:11,table_def_entry_id:5,tabledefsnapshot:5,tabledefviewset:5,tag:11,take:[0,2,3,4,7,8,9,10,11,13,17,20],taken:11,task:14,td_entri:11,tediou:20,tell:[11,20],templat:[9,18],tempor:9,term:[3,5,11],test:[9,15,19,20],text:[5,7,8,11,12,15],textfield:8,than:[8,9,10,11,12],thei:[8,9,10,11,12,13,15,17,20],them:[9,11,12,15],thi:[1,2,3,4,5,8,9,10,11,12,13,14,15,17,19,20],thing:[5,10,20],think:13,third:15,those:[10,18,19,20],though:10,three:[7,10,11,12,13],through:[9,13,20],time:[8,9,11,13,17,20],titl:[9,18],tobool:12,todo:[3,9],togeth:[11,20],too:8,tool:[0,1,10,11,15,18,20],top:[5,9,10,12,13],total_record:5,track:[10,20],tranform:15,transform:[1,5,15],transformation_error:5,transformation_success:5,transformation_warn:5,travers:20,treat_string_as_sequ:8,truthi:12,tupl:11,turn:[9,10,15,20],two:[3,4,11,12,15],txt:8,type:[2,3,4,5,7,8,9,10,11,12,13,18,20],typic:[8,10,11,15],ui:[8,9,10,11,12],undefin:11,underscor:[10,20],understand:[0,11,20],unindex:17,union:12,uniqu:[5,10,11,15,20],unique_id:[4,10],unique_source_id:[10,20],univers:11,unless:[17,20],unpublish:10,unrel:13,unrestrict:12,unsecur:18,unshard:17,until:9,unwind:10,unwound:10,up:[1,9,10,11,14,16,19],updat:[5,9,11,14,15],upgrad:15,upon:9,url:[1,11,18],us:[0,1,2,3,4,5,8,9,10,12,13,14,15,20],user:[0,4,5,6,8,10,11,13,14,15,18],usernam:[5,18],usual:[8,9,11,19],util:[2,3,4,11],v4:15,val:11,valid:[3,11],validate_form:[3,11],validate_onli:3,validate_table_form:11,valu:[3,5,8,9,10,11,12,13,15,20],variabl:[10,20],varieti:[8,11,14,18],variou:[3,5,7,8,9,11,12,13],ve:17,version:[0,10,13,14,18],versionviewset:5,view:[0,5,8,9,10,12,15,17,18],viewabl:5,viewable_report_count:5,virtual:18,visit:20,visitdiagnosi:20,visitquestionnair:20,vs:[5,11],wa:[5,9,11,15],wai:[8,13,14,15],want:[1,8,9,10,11,12,13,15,18,20],warn:[3,5,9,17],we:[7,11,13,15,18,20],web:[0,1],websit:[10,17],weekli:0,well:[7,13],what:[3,5,9,10,11,12,13],whatev:11,when:[5,8,9,10,11,13,15,20],whengener:5,where:[8,9,10,11,20],whether:[3,11,20],which:[0,8,9,10,11],whichev:[8,18],who:[8,18],whole:[8,11,13],why:5,wide:[14,18],wish:[19,20],within:[2,3,10],without:[5,11,12,13,20],won:[12,17],word:12,work:[0,5,7,11,13,15,17,18,19],workflow:[0,11],workspac:9,would:[8,9,10,11,15],wouldn:20,wrap:10,wrapper:[7,10,13],write:[11,13,14],written:11,xss:11,year:[3,8,9,11],yet:[5,11],yield:11,you:[1,2,3,4,8,9,10,11,12,13,14,15,17,18,19,20],your:[1,5,8,9,10,12,13,14,17,19,20],your_project:9,yyyi:3,zero:9},titles:["Welcome to Chiron\u2019s documentation!","Chiron API","Transforming Analysis Definitions","Transforming Cohort Definitions","Transforming Table Definitions","API Endpoints","Chiron Configuration","Built-In Concept Handlers","Built-In Processors","Chiron Global Settings","Data Dictionary","Custom Processors and Concept Handlers","Users and User Permissions","Understanding the Data Dictionary","System Overview","Version Changelog","Site Deployment Workflow","4. Deploy to Production","1. Install Chiron","3. Load data into MongoDB","2. Set Up the Data Dictionary"],titleterms:{"0":15,"1":[15,18],"10":15,"11":15,"12":15,"13":15,"15":15,"18":15,"2":[15,18,20],"2021":15,"2022":15,"21":15,"29":15,"3":[15,18,19],"30":15,"4":[15,17,18],"6":15,"abstract":11,"class":[11,13],"default":12,"do":[0,12],"return":5,"true":5,In:[7,8],The:13,With:[11,12],access:12,action:0,add:18,add_categori:4,add_criteria_set:3,add_criteria_set_count_rul:3,add_entri:[2,3,4],add_sort_entri:4,addit:[3,5],after:20,aggregationmethod:11,an:18,analysi:2,analysis_def:5,analysis_tool:5,analysisdefinit:5,analysistool:5,api:[1,5,9],app:18,architectur:14,argument:[3,20],authent:18,autocr:[12,20],autocreatedfield:10,averag:11,base:11,batchloadmixin:[],built:[5,7,8],bulk_add_entri:4,cach:9,can:0,cannot:0,categori:10,category_id:5,chang:20,change_to_boolean_and:3,change_to_boolean_or:3,changelog:15,chiron:[0,1,6,9,18],chiron_us:5,chiron_user_id:5,chironus:[5,12],clear_al:[2,3],clear_sort_entri:4,code:14,cohort:[3,5],cohort_def:5,cohortdef:8,cohortdefboolean:8,cohortdefcategori:8,cohortdefd:8,cohortdefdatedeid:8,cohortdefinit:5,cohortdefnumb:8,cohortdefnumberwithcategori:8,cohortdefprocessor:11,cohortdefprocessorbuiltinuimixin:11,cohortdeftext:8,cohortdeftextcustomsort:8,collect:[5,10,17],collectionrelationship:10,come:[],common:11,compon:13,concept:[5,7,10,11,13],concept_categori:5,conceptcategori:5,concepthandl:10,concepthandlerarg:10,configur:6,content:[0,1,6,16],copi:17,count:5,countal:11,countdistinct:11,creat:[11,18,20],create_event_rul:3,csv:20,csvfileautocr:20,custom:[11,17],data:[5,9,10,11,13,17,19,20],databas:[9,14,17,18],dataset:[10,12],def:[2,4,5],defaulttabledefconcept:10,definit:[2,3,4],delet:5,delete_criteria_set:3,delete_entri:[2,3,4],delete_event_rul:3,deploi:17,deploy:16,dictionari:[7,9,10,11,13,17,20],displai:[8,11],displayboolean:8,displaycategori:8,displayd:8,displaydatedeid:8,displaygener:8,displaynumb:8,displaynumberwithcategori:8,displayprocessor:11,displaytext:8,displaytextcustomsort:8,django:[7,18,20],djangoormautocr:20,document:0,earliest:11,edit:20,endpoint:5,etl:[8,13],etldjangofield:8,etldjangomultifieldmerg:8,etlprocessor:11,etlpythondictitem:8,etlpythondictitemcount:8,exist:18,export_csv:5,file:[9,20],flag:5,form:5,get:[5,11],global:9,group:12,handler:[7,11,13],hasvalu:11,hasvaluetext:11,how:[12,20],include_criteria_set_event_opt:5,include_criteria_set_opt:5,index:17,indic:0,instal:18,latest:11,level:12,list:20,listal:11,listdistinct:11,load:19,load_as_act:5,locat:9,manual:20,max:11,maxdat:11,me:5,median:11,min:11,mindat:11,model:[10,12,13,20],modify_event_rul:3,mongo:9,mongodb:[13,17,19],mostfrequ:11,move_entri:2,multipl:12,option:5,overview:[14,20],perform:9,permanent_id:5,permiss:[9,12,17],permissiongroup:12,post:5,preview:5,process:13,processor:[3,5,8,10,11,13],product:17,project:[5,18],project_id:5,put:5,query_tool:5,querytool:5,regist:11,releas:15,report:5,report_id:5,report_tool:5,reporttool:5,requir:18,rerun:20,resort_column:4,run:20,run_analysi:5,s:0,scenario:11,script:20,see:0,set:[9,17,18,20],share:5,site:[16,17],snapshot_id:5,soon:[],sort_cd_entri:3,sourc:20,sourcecollect:[8,10],sourcecollectionprocessor:11,sourcecollectionprocessorargu:10,sourcecsv:8,sourcedjangomodel:8,sourceself:8,sourceselfsubdoc:8,specif:3,stage:17,standardloadmixin:11,start:11,statist:5,stddev:11,step:18,swap_rows_and_col:2,system:14,tabl:[0,4,18],table_def:5,tabledefinit:5,thing:0,tip:11,transform:[2,3,4],understand:13,up:[17,18,20],us:[11,17,18],user:[9,12,17],version:[5,15],websit:9,welcom:0,work:12,workflow:16,your:[11,18]}})