USE resource;
CREATE TABLE sonic_event_questions(
  id TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  question VARCHAR(255) NOT NULL,
  answer VARCHAR(60) DEFAULT NULL,
  PRIMARY KEY(id)
);
INSERT INTO sonic_event_questions(id,question,answer)VALUES(NULL,'1+1=','2'),(NULL,'2+2=','4');