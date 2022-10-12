
import java.io.*;  
import jakarta.servlet.*;  
import jakarta.servlet.http.*;  
public class HTTPServletEx1 extends HttpServlet {  
public void doGet(HttpServletRequest request, HttpServletResponse response)  
{  
try {   
// content type has been to text  
String contentType = "text/html";  
response.setContentType(contentType);    
PrintWriter o = response.getWriter();  
// the name variable stores the content of the field userName  
// mentione in the form  
String name = request.getParameter("userName");   
// displaying the username  
o.println("Welcome to JavaTpoint " + name + "!");   
// a new session is created  
HttpSession httpSession = request.getSession();   
// the variable uname contains the value present   
// in the variable name. The variable uname is   
// shared to the other servlets present in the application  
httpSession.setAttribute("uname", name);  
// Link to reach the other servlet  
o.print("<a href='servletB'> Press Here </a>");   
o.close();  
}  
catch (Exception e)   
{  
System.out.println(e);  
}  
}  
}  
