-- Table: public.clients

-- DROP TABLE public.clients;

CREATE TABLE public.clients
(
  id bigint NOT NULL DEFAULT nextval('clients_id_seq'::regclass),
  first_name text NOT NULL,
  last_name text NOT NULL,
  street_address text NOT NULL,
  city text NOT NULL,
  postal_code text NOT NULL,
  CONSTRAINT clients_id_pk PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.clients
  OWNER TO roh;
