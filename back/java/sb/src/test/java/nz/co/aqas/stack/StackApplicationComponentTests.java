package nz.co.aqas.stack;

import nz.co.aqas.stack.controller.GeneralController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(GeneralController.class)
public class StackApplicationComponentTests {
    @Autowired
    private MockMvc mockMvc;

        @Test
        public void stackMappingIsCorrect() throws Exception {
            mockMvc.perform(get("/stack"))
                .andExpect(status().isOk())
                .andExpect(content().string(containsString("Java version")));
        }

}
