-- Table: public.providers

-- DROP TABLE public.providers;

CREATE TABLE public.providers
(
  id bigint NOT NULL DEFAULT nextval('providers_id_seq'::regclass),
  first_name text NOT NULL,
  last_name text NOT NULL,
  street_address text NOT NULL,
  city text NOT NULL,
  postal_code text NOT NULL,
  CONSTRAINT providers_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.providers
  OWNER TO roh;
