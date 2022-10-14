import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { stateStore } from "../../support/util/helper";

Given("log",function(){
    console.log("id :",stateStore.id);
})
