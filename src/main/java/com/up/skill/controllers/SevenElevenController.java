package com.up.skill.controllers;

import com.up.skill.models.SevenElevenForm;
import com.up.skill.models.SevenElevenFormRepository;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.PrintWriter;
import java.util.List;

/**
 * Created by JPMPC-B214 on 1/5/2017.
 */

@Controller

public class SevenElevenController {
    private SevenElevenFormRepository sevenElevenFormRepository;

    @Autowired
    public SevenElevenController(SevenElevenFormRepository sevenElevenFormRepository) {
        this.sevenElevenFormRepository = sevenElevenFormRepository;
    }

    @RequestMapping(value = "/data/{id}")
    public String data(@PathVariable Long id, Model model){
        model.addAttribute("dataList",sevenElevenFormRepository.findOne(id));

        return "sevenEleven/userInfo";
    }

    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String loadRegistrationPage(){
        return "sevenEleven/index";
}
/*
    @RequestMapping(value = "/thankyou", method = {RequestMethod.POST,RequestMethod.GET})
    public String loadThankYouPage(){
        return "sevenEleven/thankyou";
    }*/

    /*@RequestMapping(value = "/thankyou",method = RequestMethod.POST)
    public ModelAndView getResponseinJSON(@ModelAttribute @Valid SevenElevenForm sevenEleven,
                                          BindingResult bindingResult,
                                          ModelAndView model,
                                          WebRequest request,
                                          HttpServletResponse response){


            if (!bindingResult.hasErrors()) {
                sevenElevenFormRepository.save(sevenEleven);
                model.setViewName("sevenEleven/thankyou");
            }
            return model;
    }*/

    @RequestMapping(value = "/thankyou",method = RequestMethod.POST)
    public void getResponseinJSON(@ModelAttribute @Valid SevenElevenForm sevenEleven,
                                  Errors errors,
                                  HttpServletResponse response,BindingResult bindingResult){
        try {

            PrintWriter out = response.getWriter();

            JSONObject object = new JSONObject();
            JSONArray list = new JSONArray();
            JSONArray errFieldList = new JSONArray();

            if (!errors.hasErrors()) {
                object.put("fullname",sevenEleven.getFullname());
                object.put("message", "success");
                sevenElevenFormRepository.save(sevenEleven);

            } else {
                List<FieldError> errors1 = bindingResult.getFieldErrors();
                for (FieldError error : errors1) {
                    /*list.add(error.getField());*/
                    list.add(error.getDefaultMessage());
                    errFieldList.add(error.getField());
                    object.put("errorFields",errFieldList);
                    object.put("errors", list);
                }
            }
            out.print(object);

        } catch (Exception ex) {
            ex.toString();
        }
    }
}

