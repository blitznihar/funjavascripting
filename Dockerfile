    # Use a lightweight Nginx image as the base
    FROM nginx:alpine
    
    RUN rm -rf /usr/share/nginx/html/*
    # Copy your application files into the Nginx default web directory
    COPY . /usr/share/nginx/html

    # Expose port 9096 to allow external access to the web server
    EXPOSE 80

    # Command to start Nginx when the container launches
    CMD ["nginx", "-g", "daemon off;"]