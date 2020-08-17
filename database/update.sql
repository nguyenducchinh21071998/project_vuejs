20200804
ALTER TABLE customer_member_responsibilities CHANGE employee_id name VARCHAR(45);

20200811
ALTER TABLE departments ADD code varchar(32) AFTER id, parent_code varchar(64) AFTER code, ADD company_code varchar(64) AFTER parent_code, ADD postal_code varchar(64) AFTER company_code, ADD color_code varchar(64) AFTER address;
ALTER TABLE job_titles ADD code varchar(32) AFTER id, ADD color_code varchar(10) AFTER name;
ALTER TABLE departments ADD UNIQUE (code);
ALTER TABLE job_titles ADD UNIQUE (code);
ALTER TABLE companies ADD UNIQUE (code);
ALTER TABLE employees ADD FOREIGN KEY (department_code) REFERENCES departments(code);
ALTER TABLE employees ADD FOREIGN KEY (company_code) REFERENCES companies(code);
ALTER TABLE employees ADD FOREIGN KEY (job_title_code) REFERENCES job_titles(code);
