terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = region
  access_key = var.aws_key
  secret_key = var.aws_secret
}

resource "aws_ecs_service" "webserver" {
  ami           = var.ami
  instance_type = var.type
  name = "Website"
  cluster = aws_ecs.cluster_id

  tags = {
    Name = "Website"
  }
}

resource "aws_vpc" "aws-vpc" {
  cidr_block           = "10.10.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true
  tags = {
    Name        = "${var.name}-vpc"
    Environment = var.env
  }
}

