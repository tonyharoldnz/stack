package nz.co.aqas.stack.controller;

// A controller to route to either our back end services or an error page

import net.minidev.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
public class GeneralController {

    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }

    @ResponseBody
    @RequestMapping(value = "/stack")
    public String stack() {
        String version = System.getProperty("java.version");
        Map returnValues = new HashMap();
        returnValues.put("Java version", version);
        return JSONObject.toJSONString(returnValues);
    }

}
