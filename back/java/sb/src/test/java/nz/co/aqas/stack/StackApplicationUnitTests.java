package nz.co.aqas.stack;

import nz.co.aqas.stack.controller.GeneralController;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class StackApplicationUnitTests {

	@Test
	void contextLoads() {
	}

	@Test
	void stackReturnsJavaVersion() {
		GeneralController gc = new GeneralController();
		String version = gc.stack();
		assert(version.contains("Java version"));
		assert (version.contains(System.getProperty("java.version")));
	}

}
